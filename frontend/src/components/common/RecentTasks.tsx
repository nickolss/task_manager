import { Badge, List, ListItem, Text, VStack } from '@chakra-ui/react';

interface Task {
  id: number;
  title: string;
  subject: string;
}

interface RecentTasksProps {
  tasks: Task[];
}

const subjectColors: { [key: string]: string } = {
  Math: 'blue',
  Physics: 'purple',
  History: 'orange',
  Programming: 'green',
};

const RecentTasks = ({ tasks }: RecentTasksProps) => {
  return (
    <VStack w="100%" h="100%" align="start" p={4}>
      <Text fontWeight="bold" fontSize="lg" mb={2}>
        Recent Tasks
      </Text>
      <List.Root w="100%">
        {tasks.map((task) => (
          <ListItem key={task.id} display="flex" justifyContent="space-between" alignItems="center">
            <Text>{task.title}</Text>
            <Badge colorScheme={subjectColors[task.subject] || 'gray'}>
              {task.subject}
            </Badge>
          </ListItem>
        ))}
      </List.Root>
    </VStack>
  );
};

export default RecentTasks;