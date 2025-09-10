// src/pages/SettingsPage.tsx
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import {
    Box,
    Button,
    Flex,
    Heading,
    Input,
    Stack,
    Text,
    Field,
    Dialog,
    Portal,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
    profileSchema,
    passwordSchema,
    type ProfileFormInputs,
    type PasswordFormInputs,
} from '@/validation/SettingsPage.schema';
import { useState } from 'react';

const SettingsPage = () => {
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

    const {
        register: registerProfile,
        handleSubmit: handleSubmitProfile,
        formState: { errors: profileErrors, isSubmitting: isProfileSubmitting },
    } = useForm<ProfileFormInputs>({
        resolver: yupResolver(profileSchema),
        defaultValues: {
            fullName: 'John Doe',
            email: 'john.doe@example.com',
        },
    });

    const {
        register: registerPassword,
        handleSubmit: handleSubmitPassword,
        formState: { errors: passwordErrors, isSubmitting: isPasswordSubmitting },
        reset: resetPasswordForm,
    } = useForm<PasswordFormInputs>({
        resolver: yupResolver(passwordSchema),
    });

    const onProfileSubmit = (data: ProfileFormInputs) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Profile updated:', data);
                resolve(true);
            }, 1000);
        });
    };

    const onPasswordSubmit = (data: PasswordFormInputs) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Password updated. New password:', data.newPassword);
                resetPasswordForm();
                resolve(true);
            }, 1000);
        });
    };

    return (
        <Box display="flex">
            <Sidebar />
            <Box flexGrow={1} bg="bg.page">
                <Header title="Settings" />
                <Box p={6}>
                    <Heading as="h1" size="xl" mb={6}>
                        Settings
                    </Heading>

                    <Stack maxW="container.md">
                        <Box as="form" onSubmit={handleSubmitProfile(onProfileSubmit)} bg="bg.surface" p={6} borderRadius="md" boxShadow="sm">
                            <Stack>
                                <Heading size="md">Profile Information</Heading>
                                <Text color="text.secondary">Update your personal details here.</Text>
                                <Field.Root invalid={!!profileErrors.fullName} required>
                                    <Field.Label>Full Name</Field.Label>
                                    <Input {...registerProfile('fullName')} borderColor="border.default" />
                                    {profileErrors.fullName && <Field.ErrorText>{profileErrors.fullName.message}</Field.ErrorText>}
                                </Field.Root>
                                <Field.Root invalid={!!profileErrors.email} required>
                                    <Field.Label>Email Address</Field.Label>
                                    <Input type="email" {...registerProfile('email')} borderColor="border.default" />
                                    {profileErrors.email && <Field.ErrorText>{profileErrors.email.message}</Field.ErrorText>}
                                </Field.Root>
                                <Flex justify="flex-end">
                                    <Button type="submit" colorScheme="brand" isLoading={isProfileSubmitting}>
                                        Save Changes
                                    </Button>
                                </Flex>
                            </Stack>
                        </Box>

                        <Box as="form" onSubmit={handleSubmitPassword(onPasswordSubmit)} bg="bg.surface" p={6} borderRadius="md" boxShadow="sm">
                            <Stack>
                                <Heading size="md">Change Password</Heading>
                                <Field.Root invalid={!!passwordErrors.currentPassword} required>
                                    <Field.Label>Current Password</Field.Label>
                                    <Input type="password" {...registerPassword('currentPassword')} borderColor="border.default" />
                                    {passwordErrors.currentPassword && <Field.ErrorText>{passwordErrors.currentPassword.message}</Field.ErrorText>}
                                </Field.Root>
                                <Field.Root invalid={!!passwordErrors.newPassword} required>
                                    <Field.Label>New Password</Field.Label>
                                    <Input type="password" {...registerPassword('newPassword')} borderColor="border.default" />
                                    {passwordErrors.newPassword && <Field.ErrorText>{passwordErrors.newPassword.message}</Field.ErrorText>}
                                </Field.Root>
                                <Field.Root invalid={!!passwordErrors.confirmPassword} required>
                                    <Field.Label>Confirm New Password</Field.Label>
                                    <Input type="password" {...registerPassword('confirmPassword')} borderColor="border.default" />
                                    {passwordErrors.confirmPassword && <Field.ErrorText>{passwordErrors.confirmPassword.message}</Field.ErrorText>}
                                </Field.Root>
                                <Flex justify="flex-end">
                                    <Button type="submit" colorScheme="brand" isLoading={isPasswordSubmitting}>
                                        Update Password
                                    </Button>
                                </Flex>
                            </Stack>
                        </Box>

                        <Box bg="bg.surface" p={6} borderRadius="md" boxShadow="sm" borderWidth="1px" borderColor="red.500">
                            <Stack>
                                <Heading size="md" color="red.500">Danger Zone</Heading>
                                <Flex justify="space-between" align="center">
                                    <Box>
                                        <Text fontWeight="medium">Delete Account</Text>
                                        <Text color="text.secondary">Permanently delete your account and all associated data.</Text>
                                    </Box>
                                    <Button colorScheme="red" onClick={() => setIsDeleteDialogOpen(true)}>
                                        Delete Account
                                    </Button>
                                </Flex>
                            </Stack>
                        </Box>
                    </Stack>
                </Box>
            </Box>

            <Dialog.Root open={isDeleteDialogOpen} onOpenChange={(e) => setIsDeleteDialogOpen(e.open)}>
                <Portal>
                    <Dialog.Backdrop />
                    <Dialog.Positioner>
                        <Dialog.Content bg="bg.surface">
                            <Stack p={6} gap={3}>
                                <Dialog.Title>Are you absolutely sure?</Dialog.Title>
                                <Dialog.Description>
                                    This action cannot be undone. This will permanently delete your account.
                                </Dialog.Description>
                                <Flex gap={3} mt={4} justify="flex-end">
                                    <Dialog.CloseTrigger asChild>
                                        <Button variant="ghost">Cancel</Button>
                                    </Dialog.CloseTrigger>
                                    <Button colorScheme="red">Yes, delete account</Button>
                                </Flex>
                            </Stack>
                        </Dialog.Content>
                    </Dialog.Positioner>
                </Portal>
            </Dialog.Root>
        </Box>
    );
};

export default SettingsPage;