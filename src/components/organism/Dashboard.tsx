import { PoolUserGrid } from "../molecules/PoolUserGrid";

const users = [
  {
    id: '1231123',
    name: 'Eduardo Silva',
    status: 'active' as 'active' | 'inactive',
    activityType: 'natação',
    daysOfActivity: ['Monday', 'Wednesday'] // ['Monday', 'Wednesday', 'Friday']
  },
  {
    id: '1231123',
    name: 'Eduardo Silva',
    status: 'inactive' as 'active' | 'inactive',
    activityType: 'natação',
    daysOfActivity: ['Monday', 'Wednesday'] // ['Monday', 'Wednesday', 'Friday']
  },
  {
    id: '1231123',
    name: 'Eduardo Silva',
    status: 'active' as 'active' | 'inactive',
    activityType: 'natação',
    daysOfActivity: ['Monday', 'Wednesday'] // ['Monday', 'Wednesday', 'Friday']
  },
  {
    id: '1231123',
    name: 'Eduardo Silva',
    status: 'inactive' as 'active' | 'inactive',
    activityType: 'natação',
    daysOfActivity: ['Monday', 'Wednesday'] // ['Monday', 'Wednesday', 'Friday']
  },
  {
    id: '1231123',
    name: 'Eduardo Silva',
    status: 'active' as 'active' | 'inactive',
    activityType: 'natação',
    daysOfActivity: ['Monday', 'Wednesday'] // ['Monday', 'Wednesday', 'Friday']
  },
  {
    id: '1231123',
    name: 'Eduardo Silva',
    status: 'inactive' as 'active' | 'inactive',
    activityType: 'natação',
    daysOfActivity: ['Monday', 'Wednesday'] // ['Monday', 'Wednesday', 'Friday']
  },
  {
    id: '1231123',
    name: 'Eduardo Silva',
    status: 'active' as 'active' | 'inactive',
    activityType: 'natação',
    daysOfActivity: ['Monday', 'Wednesday'] // ['Monday', 'Wednesday', 'Friday']
  },
  {
    id: '1231123',
    name: 'Eduardo Silva',
    status: 'inactive' as 'active' | 'inactive',
    activityType: 'natação',
    daysOfActivity: ['Monday', 'Wednesday'] // ['Monday', 'Wednesday', 'Friday']
  },
  {
    id: '1231123',
    name: 'Eduardo Silva',
    status: 'active' as 'active' | 'inactive',
    activityType: 'natação',
    daysOfActivity: ['Monday', 'Wednesday'] // ['Monday', 'Wednesday', 'Friday']
  },
  {
    id: '1231123',
    name: 'Eduardo Silva',
    status: 'inactive' as 'active' | 'inactive',
    activityType: 'natação',
    daysOfActivity: ['Monday', 'Wednesday'] // ['Monday', 'Wednesday', 'Friday']
  },
  {
    id: '1231123',
    name: 'Eduardo Silva',
    status: 'active' as 'active' | 'inactive',
    activityType: 'natação',
    daysOfActivity: ['Monday', 'Wednesday'] // ['Monday', 'Wednesday', 'Friday']
  },
  {
    id: '1231123',
    name: 'Eduardo Silva',
    status: 'inactive' as 'active' | 'inactive',
    activityType: 'natação',
    daysOfActivity: ['Monday', 'Wednesday'] // ['Monday', 'Wednesday', 'Friday']
  },
  {
    id: '1231123',
    name: 'Eduardo Silva',
    status: 'active' as 'active' | 'inactive',
    activityType: 'natação',
    daysOfActivity: ['Monday', 'Wednesday'] // ['Monday', 'Wednesday', 'Friday']
  },
  {
    id: '1231123',
    name: 'Eduardo Silva',
    status: 'inactive' as 'active' | 'inactive',
    activityType: 'natação',
    daysOfActivity: ['Monday', 'Wednesday'] // ['Monday', 'Wednesday', 'Friday']
  },
  {
    id: '1231123',
    name: 'Eduardo Silva',
    status: 'active' as 'active' | 'inactive',
    activityType: 'natação',
    daysOfActivity: ['Monday', 'Wednesday'] // ['Monday', 'Wednesday', 'Friday']
  },
  {
    id: '1231123',
    name: 'Eduardo Silva',
    status: 'inactive' as 'active' | 'inactive',
    activityType: 'natação',
    daysOfActivity: ['Monday', 'Wednesday'] // ['Monday', 'Wednesday', 'Friday']
  },
];

const handleEdit = (id: string) => {
  console.log(`Editing ${id}`)
};

const handleDelete = (id: string) => {
  console.log(`Deleting ${id}`)
};

export default function Dashboard() {
  return (
    <PoolUserGrid users={users} onEdit={(id) => handleEdit(id)} onDelete={(id) => handleDelete(id)}/>
  )
}
