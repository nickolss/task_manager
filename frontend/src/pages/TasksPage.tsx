import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import {
    Badge,
    Box,
    Button,
    Flex,
    Heading,
    HStack,
    IconButton,
    Stack,
    Table,
    Text,
    Input,
    Dialog,
    Portal,
    Field,
    NativeSelect,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LuPencil, LuTrash2 } from 'react-icons/lu';
import { type Task } from '@/types/task';
import { taskSchema, type TaskFormInputs } from '@/validation/TasksPage.schema';
import { useState } from 'react';

const mockTasks: Task[] = [
    { id: 1, title: 'Finish the design for the new landing page', status: 'In Progress', priority: 'High', dueDate: '2025-09-15' },
    { id: 2, title: 'Implement dark mode feature', status: 'Completed', priority: 'Medium', dueDate: '2025-09-10' },
    { id: 3, title: 'Fix bug #1123 in the payment module', status: 'Pending', priority: 'High', dueDate: '2025-09-12' },
    { id: 4, title: 'Write documentation for the API', status: 'Pending', priority: 'Low', dueDate: '2025-09-20' },
];
const priorityColors = { High: 'red', Medium: 'orange', Low: 'green' };
const statusColors = { 'In Progress': 'blue', Completed: 'green', Pending: 'yellow' };

const TasksPage = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<TaskFormInputs>({
        resolver: yupResolver(taskSchema),
    });

    const handleCreateTask = (data: TaskFormInputs) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('New Task Data:', data);
                setIsDialogOpen(false);
                reset();
                resolve(true);
            }, 1000);
        });
    };

    return (
        <Box display="flex">
            <Sidebar />
            <Box flexGrow={1} bg="bg.page">
                <Header title="Tasks" />
                <Box p={6} display="flex" flexDirection="column" gap={6}>
                    <Flex justify="space-between" align="center">
                        <Heading as="h1" size="xl">
                            Manage Tasks
                        </Heading>
                        <Dialog.Root open={isDialogOpen} onOpenChange={(e) => setIsDialogOpen(e.open)}>
                            <Dialog.Trigger asChild>
                                <Button colorScheme="brand">
                                    New Task
                                </Button>
                            </Dialog.Trigger>
                            <Portal>
                                <Dialog.Backdrop />
                                <Dialog.Positioner>
                                    <Dialog.Content
                                        bg="bg.surface"
                                        as="form"
                                        onSubmit={handleSubmit(handleCreateTask)}
                                    >
                                        <Stack gap={6} p={6}>
                                            <Stack gap={1}>
                                                <Dialog.Title>Create a New Task</Dialog.Title>
                                                <Dialog.Description>
                                                    Fill in the details below to add a new task.
                                                </Dialog.Description>
                                            </Stack>

                                            <Stack gap={4}>
                                                <Field.Root required invalid={!!errors.title} border="">
                                                    <Field.Label>
                                                        Task Title
                                                        <Field.RequiredIndicator />
                                                    </Field.Label>
                                                    <Input placeholder="Write a text about..." {...register('title')} />
                                                    {errors.title && <Field.ErrorText>{errors.title.message}</Field.ErrorText>}
                                                </Field.Root>

                                                <Field.Root required invalid={!!errors.subject}>
                                                    <Field.Label>
                                                        Subject
                                                        <Field.RequiredIndicator />
                                                    </Field.Label>
                                                    <Input placeholder="Literature" {...register('subject')} />
                                                    {errors.subject && <Field.ErrorText>{errors.subject.message}</Field.ErrorText>}
                                                </Field.Root>

                                                <Field.Root required invalid={!!errors.status}>
                                                    <Field.Label>
                                                        Status
                                                        <Field.RequiredIndicator />
                                                    </Field.Label>
                                                    <NativeSelect.Root>
                                                        <NativeSelect.Field {...register('status')}>
                                                            <option value="Pending">Pending</option>
                                                            <option value="In Progress">In Progress</option>
                                                            <option value="Completed">Completed</option>
                                                        </NativeSelect.Field>
                                                        <NativeSelect.Indicator />
                                                    </NativeSelect.Root>
                                                    {errors.status && <Field.ErrorText>{errors.status.message}</Field.ErrorText>}
                                                </Field.Root>

                                                <Field.Root required invalid={!!errors.priority}>
                                                    <Field.Label>
                                                        Priority
                                                        <Field.RequiredIndicator />
                                                    </Field.Label>
                                                    <NativeSelect.Root>
                                                        <NativeSelect.Field {...register('priority')}>
                                                            <option value="Low">Low</option>
                                                            <option value="Medium">Medium</option>
                                                            <option value="High">High</option>
                                                        </NativeSelect.Field>
                                                        <NativeSelect.Indicator />
                                                    </NativeSelect.Root>
                                                    {errors.priority && <Field.ErrorText>{errors.priority.message}</Field.ErrorText>}
                                                </Field.Root>
                                            </Stack>

                                            <Flex gap={3} justify="flex-end">
                                                <Dialog.CloseTrigger asChild>
                                                    <Button variant="ghost">Cancel</Button>
                                                </Dialog.CloseTrigger>
                                                <Button colorScheme="brand" type="submit">
                                                    Save Task
                                                </Button>
                                            </Flex>
                                        </Stack>
                                    </Dialog.Content>
                                </Dialog.Positioner>
                            </Portal>
                        </Dialog.Root>
                    </Flex>

                    {/* A tabela permanece igual, com a sintaxe correta */}
                    <Box bg="bg.surface" borderRadius="md" boxShadow="sm">
                        <Table.Root variant="line" size="md" striped interactive>
                            <Table.Header>
                                <Table.Row>
                                    <Table.ColumnHeader>Task</Table.ColumnHeader>
                                    <Table.ColumnHeader>Status</Table.ColumnHeader>
                                    <Table.ColumnHeader>Priority</Table.ColumnHeader>
                                    <Table.ColumnHeader>Due Date</Table.ColumnHeader>
                                    <Table.ColumnHeader>Actions</Table.ColumnHeader>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {mockTasks.map((task) => (
                                    <Table.Row key={task.id}>
                                        <Table.Cell>
                                            <Text fontWeight="medium">{task.title}</Text>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <Badge colorScheme={statusColors[task.status]}>{task.status}</Badge>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <Badge colorScheme={priorityColors[task.priority]}>{task.priority}</Badge>
                                        </Table.Cell>
                                        <Table.Cell>{task.dueDate}</Table.Cell>
                                        <Table.Cell>
                                            <HStack>
                                                <IconButton aria-label="Edit task" variant="ghost" size="sm">
                                                    <LuPencil />
                                                </IconButton>
                                                <IconButton aria-label="Delete task" variant="ghost" size="sm" colorScheme="red">
                                                    <LuTrash2 />
                                                </IconButton>
                                            </HStack>
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table.Root>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default TasksPage;