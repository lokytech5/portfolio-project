
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { ContactMessage, ContactMessageResponse } from '../components/types';
import apiClient from '../utils/apiClient';

const fetchContactMessages = async () => {
  const response = await apiClient.get<ContactMessageResponse>('/contacts');
  return response.data.data;
};

const useContactMessages = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newMessage: { email: string; message: string }) =>
      apiClient.post<{ data: ContactMessage }>('/contacts', {
        data: newMessage,
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['contactMessages']);
      },
    }
  );

  return {
    ...useQuery<ContactMessage[], Error>({
      queryKey: ['contactMessages'],
      queryFn: fetchContactMessages,
    }),
    createMessage: mutation.mutate,
  };
};

export default useContactMessages;
