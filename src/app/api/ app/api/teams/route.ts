import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'teamData.json');

function readData() {
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(jsonData);
}

function writeData(data) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

export async function GET(req) {
    const teams = readData();
    return new Response(JSON.stringify(teams), { status: 200 });
}

export async function POST(req) {
    const newTeam = await req.json();
    const teams = readData();
    teams.push(newTeam);
    writeData(teams);
    return new Response(JSON.stringify({ message: 'Team added successfully' }), { status: 201 });
}

export async function PUT(req) {
    const { id, updatedTeam } = await req.json();
    const teams = readData();
    const index = teams.findIndex(team => team.id === id);

    if (index === -1) {
        return new Response(JSON.stringify({ message: 'Team not found' }), { status: 404 });
    }

    teams[index] = { ...teams[index], ...updatedTeam };
    writeData(teams);
    return new Response(JSON.stringify({ message: 'Team updated successfully' }), { status: 200 });
}

export async function DELETE(req) {
    const { id } = await req.json();
    const teams = readData();
    const updatedTeams = teams.filter(team => team.id !== id);

    if (teams.length === updatedTeams.length) {
        return new Response(JSON.stringify({ message: 'Team not found' }), { status: 404 });
    }

    writeData(updatedTeams);
    return new Response(JSON.stringify({ message: 'Team deleted successfully' }), { status: 200 });
}
