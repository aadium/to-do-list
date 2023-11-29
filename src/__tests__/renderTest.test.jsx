import { render, screen } from '@testing-library/react';
import Homepage from '../pages/homepage';

describe('Homepage rendering', () => {
    beforeEach(() => {
        render(<Homepage />);
    });

    describe('Header rendering', () => {
        test('Displays "Pending Tasks" header', () => {
            const pendingTasksHeader = screen.getByText(/Pending Tasks/i);
            expect(pendingTasksHeader).toBeInTheDocument();
        });

        test('Displays "Completed Tasks" header', () => {
            const completedTasksHeader = screen.getByText(/Completed Tasks/i);
            expect(completedTasksHeader).toBeInTheDocument();
        });

        test('Displays "Add a new task" header', () => {
            const addTaskHeader = screen.getByText(/Add a new task/i);
            expect(addTaskHeader).toBeInTheDocument();
        });
    });

    describe('Add Task section rendering', () => {
        test('Displays task name input field', () => {
            const addTaskNameTextBox = screen.getByPlaceholderText(/Enter task name/i);
            expect(addTaskNameTextBox).toBeInTheDocument();
        });

        test('Displays due date select input', () => {
            const addTaskDueDateSelect = screen.getByLabelText(/Select due date/i);
            expect(addTaskDueDateSelect).toBeInTheDocument();
        });
    });
});
