import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  HomeIcon,
  LayersIcon,
  ListChecks,
  ShoppingBagIcon,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const items = [
  {
    endpoint: '/',
    label: 'Home',
    Icon: HomeIcon,
  },
  {
    endpoint: '/todos',
    label: 'Todos',
    Icon: ListChecks,
  },
  {
    endpoint: '/projects',
    label: 'Projects',
    Icon: LayersIcon,
  },
  {
    endpoint: '/products',
    label: 'Products',
    Icon: ShoppingBagIcon,
  },
];

export default function Sidebar() {
  return (
    <nav className='w-56 border-r p-4 flex flex-col gap-1'>
      {items.map((item) => (
        <NavLink
          to={item.endpoint}
          className={({ isActive }) =>
            cn(
              '!justify-start',
              isActive
                ? buttonVariants({ variant: 'default' })
                : buttonVariants({ variant: 'ghost' })
            )
          }>
          <item.Icon />
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
