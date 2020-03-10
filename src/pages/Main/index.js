import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Form, Input, SubmitButton } from './styles';

export default function Main() {
    return (
        <Container>
            <Form>
                <Input
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeHolder="Adicionar usuário"
                />
                <SubmitButton>
                    <Icon name="add" size={20} color="#fff" />
                </SubmitButton>
            </Form>
        </Container>
    );
}
