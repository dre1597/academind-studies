enum Role {
    ADMIN = 'ADMIN',
    READ_ONLY = 1,
    AUTHOR,
}

const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: Role;
    // role: [number, string]; // tuple like java or c# not python
} = {
    name: 'Dré',
    age: 24,
    hobbies: ['Sports', 'Anime'],
    role: Role.ADMIN,
    // role: [2, 'author'],
};

console.log(person);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
    console.log('is admin');
}
