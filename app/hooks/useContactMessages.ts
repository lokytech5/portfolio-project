import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { ContactMessage, ContactMessageResponse } from '../components/types';
import apiClient from '../utils/apiClient';
import { useBackendStatus } from '../BackendStatusContext';

const fetchContactMessages = async () => {
  const response = await apiClient.get<ContactMessageResponse>('/contacts');
  return response.data.data;
};

const useContactMessages = () => {
  const queryClient = useQueryClient();
  const { status: backendStatus } = useBackendStatus();

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

  const query = useQuery<ContactMessage[], Error>({
    queryKey: ['contactMessages'],
    queryFn: fetchContactMessages,
    enabled: backendStatus === 'ready',
  });

  return {
    ...query,
    createMessage: mutation.mutate,
  };
};

export default useContactMessages;
