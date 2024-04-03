export default function StudentForm() {
    return (
        <div>
            <form>
            <div>
                <label>Name:</label>
                <input type="text" id="name" value="Brian Duong"></input>
            </div>
            <div>
                <label>Email:</label>
                <input type="email" id="email"></input>
            </div>
            <div>
                <label>Phone:</label>
                <input type="text" id="phone"></input>
            </div>
            </form>
        </div>
    );
};