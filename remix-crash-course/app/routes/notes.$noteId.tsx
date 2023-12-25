import { json, LoaderFunctionArgs } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';

import { getStoredNotes, Note } from '~/data/notes';
import styles from '~/styles/note-details.css';

export default function NoteDetailsPage() {
  const note: Note = useLoaderData();

  return (
    <main id="note-details">
      <header>
        <nav>
          <Link to="/notes">Back to all Notes</Link>
        </nav>
        <h1>{note.title}</h1>
      </header>
      <p id="note-details-content">{note.content}</p>
    </main>
  );
}

export async function loader({ params }: LoaderFunctionArgs) {
  const notes = await getStoredNotes();
  const noteId = params.noteId;
  const selectedNote = notes.find((note: Note) => note.id === noteId);

  if (!selectedNote) {
    throw json(
      { message: 'Could not find note for id ' + noteId },
      { status: 404 }
    );
  }

  return selectedNote;
}

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export function meta({ data }: any) {
  return [{ title: data.title, description: 'Manage your notes with ease.' }];
}
