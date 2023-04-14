import { Open_Sans } from 'next/font/google';
import TextInput from '@/common/components/shared/TextInput';

const openSans = Open_Sans({ subsets: ['latin'] });

const Components = () => {
  return (
    <div className="flex items-center justify-center w-full max-w-lg py-20 mx-auto rounded-lg">
      <TextInput label="label" placeholder="placeholder" ID="ID" />
    </div>
  );
};

export default Components;
