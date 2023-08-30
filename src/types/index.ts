type Props = {
  id: string;
};

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  link: string;
  text: string;
}

export type { Props, ContactItemProps };
