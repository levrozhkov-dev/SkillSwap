import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type FC,
  type SyntheticEvent,
} from 'react';
import { Profile } from '../../widgets/profile/ui/profile';
import { useSelector } from 'react-redux';
import { type RootState } from '../../providers/store/store';

interface FormData {
  email: string;
  name: string;
  avatar: string;
  date: string;
  gender: string;
  city: string;
  description: string;
  password: string;
}

export const ProfilePage: FC = () => {
  const user = useSelector((state: RootState) => state.login.user);
  const cities = useSelector((state: RootState) => state.cities);

  const cityOptions = useMemo(
    () => cities.map((city) => ({ value: city.name, label: city.name })),
    [cities],
  );

  const [formValue, setFormValue] = useState<FormData>({
    email: '',
    name: '',
    avatar: '',
    date: '',
    gender: '',
    city: '',
    description: '',
    password: '',
  });

  // Функция для обновления полей формы
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormValue((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    [],
  );

  const handleDateChange = (date: Date | null) => {
    const dateString = date
      ? date.toISOString().split('T')[0]
      : user?.date || ''; // fallback к user.date
    setFormValue((prev) => ({
      ...prev,
      date: dateString,
    }));
  };

  useEffect(() => {
    if (user) {
      setFormValue({
        email: user.email || '',
        name: user.name || '',
        avatar: user.avatar || '',
        date: user.date || '',
        gender: user.gender || '',
        city: user.city || '',
        description: user.description || '',
        password: user.password || '',
      });
    }
  }, [user]);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    //TODO отправка данных для изменения данных пользователя
    console.log('formValue:', formValue);
  };

  const isFormChanged = useMemo(() => {
    if (!user) return false;

    return (
      formValue.email !== user.email ||
      formValue.name !== user.name ||
      formValue.avatar !== user.avatar ||
      formValue.date !== user.date ||
      formValue.gender !== user.gender ||
      formValue.city !== user.city ||
      formValue.description !== user.description ||
      formValue.password !== user.password
    );
  }, [formValue, user]);

  return (
    <Profile
      cities={cityOptions}
      formValue={formValue}
      isFormChanged={isFormChanged}
      handleSubmit={handleSubmit}
      handleInputChange={handleInputChange}
      handleDateChange={handleDateChange}
    />
  );
};
