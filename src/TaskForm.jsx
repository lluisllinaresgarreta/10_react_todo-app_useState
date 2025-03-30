import styles from "./TaskForm.module.css";

export const TaskForm = ({ onAddTask }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.elements.title.value.trim();
        const description = form.elements.description.value.trim();
        const status = form.elements.status.value;

        if (!title || !description) return;

        onAddTask({
            id: Date.now(),
            title,
            description,
            status: status.toLowerCase(),
        });
        form.reset();
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input
                type="text"
                id="title"
                name="title"
                placeholder="Task Title"
                className={styles.input}
                required
            />
            <input
                type="text"
                id="description"
                name="description"
                placeholder="Task Description"
                className={styles.input}
                required
            />
            <select name="status" className={styles.select}>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="done">Done</option>
            </select>
            <button type="submit" className={styles.button} >
                Add Task
            </button>
        </form>
    );
}