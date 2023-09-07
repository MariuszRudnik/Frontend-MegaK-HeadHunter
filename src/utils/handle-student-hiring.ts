export const handleStudentHiring = async (id: string) => {
    const res = await fetch(`http://localhost:3001/recruiter/hirestudent/${id}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        credentials: "include",
    });
    const data = await res.json();
    console.log(`${data.message}. ID zatrudnionego kursanta: ${id}. `);

    window.location.href = "/to-talk";
}
