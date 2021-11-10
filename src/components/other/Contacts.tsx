import React from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import { Contact } from './Contact';

const contacts = [
  {
    contactId: '1',
  },
  {
    contactId: '2',
  },
  {
    contactId: '3',
  },
  {
    contactId: '4',
  },
  {
    contactId: '5',
  },
  {
    contactId: '6',
  },
  {
    contactId: '7',
  },
  {
    contactId: '8',
  },
  {
    contactId: '9',
  },
  {
    contactId: '10',
  },
  {
    contactId: '11',
  },
  {
    contactId: '12',
  },
  {
    contactId: '13',
  },
];
export const Contacts = () => (
  <ContactsWrapper>
    <FlatList
      data={contacts}
      keyExtractor={item => item.contactId}
      renderItem={() => <Contact />}
      style={{ margin: '-2%' }}
      contentContainerStyle={{ padding: '2%' }}
    />
  </ContactsWrapper>
);

const ContactsWrapper = styled.View`
  flex: 1;
  width: 100%;
  padding-vertical: 10%;
`;
