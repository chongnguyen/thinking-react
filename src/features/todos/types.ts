export type TTask = {
  id: number
  text: string
  done: boolean
}

export enum ETaskAction {
  'add' = 'add',
  edit = 'edit',
  delete = 'delete',
  done = 'done',
}

export interface ITaskAction {
  type: ETaskAction
  id: number
  text?: string
}
