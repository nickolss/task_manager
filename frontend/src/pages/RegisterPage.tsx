import { Box, Button, Field, Heading, Input, Stack, Text } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema, type RegisterFormInputs } from '@/validation/RegisterPage.schema';
import { Link as RouterLink } from 'react-router-dom';

const RegisterPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormInputs>({
        resolver: yupResolver(registerSchema),
    });

    const handleRegister = (data: RegisterFormInputs) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const { ...submissionData } = data;
                console.log('Registration Data:', submissionData);
                resolve(true);
            }, 2000);
        });
    };

    return (
        <Box minH="100vh" display="flex" alignItems="center" justifyContent="center" py={12}>
            <Stack as="form" onSubmit={handleSubmit(handleRegister)} w="100%" maxW="md" p={8} borderWidth={1} borderRadius="lg" boxShadow="lg">
                <Heading fontSize="2xl" textAlign="center">Create your Account</Heading>

                <Field.Root required invalid={!!errors.name}>
                    <Field.Label>
                        Full Name
                        <Field.RequiredIndicator />
                    </Field.Label>
                    <Input placeholder='John Doe' type='text' {...register('name')} />
                    {errors.name && <Field.ErrorText>{errors.name.message}</Field.ErrorText>}
                </Field.Root>

                <Field.Root required invalid={!!errors.email}>
                    <Field.Label>
                        Email
                        <Field.RequiredIndicator />
                    </Field.Label>
                    <Input placeholder='email@example.com' type='email' {...register('email')} />
                    {errors.email && <Field.ErrorText>{errors.email.message}</Field.ErrorText>}
                </Field.Root>

                <Field.Root required invalid={!!errors.password}>
                    <Field.Label>
                        Password
                        <Field.RequiredIndicator />
                    </Field.Label>
                    <Input placeholder='*********' type='password' {...register('password')} />
                    {errors.password && <Field.ErrorText>{errors.password.message}</Field.ErrorText>}
                </Field.Root>

                <Field.Root required invalid={!!errors.confirmPassword}>
                    <Field.Label>
                        Confirm Password
                        <Field.RequiredIndicator />
                    </Field.Label>
                    <Input placeholder='*********' type='password' {...register('confirmPassword')} />
                    {errors.confirmPassword && <Field.ErrorText>{errors.confirmPassword.message}</Field.ErrorText>}
                </Field.Root>

                <Button
                    type="submit"
                    colorScheme="blue"
                >
                    Sign Up
                </Button>

                <Text>
                    Already have an account?{' '}
                    <RouterLink to="/login">
                        Sign In
                    </RouterLink>
                </Text>
            </Stack>
        </Box>
    );
};

export default RegisterPage;