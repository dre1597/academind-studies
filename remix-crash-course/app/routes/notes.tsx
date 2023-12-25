import NewNote, { links as newNoteLinks } from '~/components/NewNote';
import NoteList, { links as noteListLinks } from '~/components/NoteList';
import { getStoredNotes, Note, storeNotes } from '~/data/notes';
import { redirect, useLoaderData } from '@remix-run/react';
import { ActionFunctionArgs } from '@remix-run/node';

export default function NotesPage() {
  const notes = useLoaderData<Note[]>();

  return (
    <main>
      <NewNote/>
      <NoteList notes={notes}/>
    </main>
  );
}

export async function loader() {
  return await getStoredNotes();
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const noteData = Object.fromEntries(formData);

  // @ts-ignore
  if ((noteData.title ?? '')?.trim().length < 5) {
    return { message: 'Invalid title - must be at least 5 characters long' };
  }

  const existingNotes = await getStoredNotes();
  noteData.id = new Date().toISOString();
  const updatedNotes = existingNotes.concat(noteData);
  await storeNotes(updatedNotes);
  return redirect('/notes');
}

export function links() {
  return [...newNoteLinks(), ...noteListLinks()];
}
