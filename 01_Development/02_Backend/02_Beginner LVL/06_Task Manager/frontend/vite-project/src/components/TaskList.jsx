import React from 'react';

const tasks = [
    { id: 1, title: 'Complete project setup', completed: false },
    { id: 2, title: 'Design database schema', completed: true },
    { id: 3, title: 'Implement authentication', completed: false },
];

const TaskList = () => {
        return (
            <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-center">Your Tasks</h2>
                <ul className="divide-y divide-gray-200">
                    {tasks.map((task) => (
                        <li key={task.id} className="flex items-center justify-between py-3">
                            <span className={task.completed ? 'line-through text-gray-400' : ''}>{task.title}</span>
                            <span
                                className={`px-2 py-1 rounded text-xs font-semibold ${task.completed ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}`}
                            >
                                {task.completed ? 'Completed' : 'Pending'}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        );
};

export default TaskList;
