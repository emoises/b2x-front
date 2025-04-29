import { Button } from '../atoms/Button'
import styles from './PoolUserGrid.module.css'

export type Status = 'active' | 'inactive'

interface PoolUser {
  id: string
  name: string
  status: Status
  activityType: string
  daysOfActivity: string[] // ['Monday', 'Wednesday', 'Friday']
}

interface Props {
  users: PoolUser[]
  onEdit: (id: string) => void
  onDelete: (id: string) => void
}

export function PoolUserGrid({ users, onEdit, onDelete }: Props) {
  return (
    <div className={styles.grid}>
      {users.map((user) => (
        <div key={user.id} className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.name}>{user.name}</span>
            <span className={`${styles.status} ${user.status === 'active' ? styles.active : styles.inactive}`}>
              {user.status === 'active' ? 'Ativo' : 'Inativo'}
            </span>
          </div>
          <div className={styles.details}>
            <div><strong>Atividade:</strong> {user.activityType}</div>
            <div>{user.daysOfActivity.join(', ')}</div>
          </div>
          <div className={styles.buttonGroup}>
            <Button onClick={() => onEdit(user.id)} className={styles.editButton}>
              Editar
            </Button>
            <Button onClick={() => onDelete(user.id)} className={styles.deleteButton}>
              Apagar
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
