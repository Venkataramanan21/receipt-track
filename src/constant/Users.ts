export type UserIds =
  | 'venkat'
  | 'nitheesh'
  | 'gnana'
  | 'gnanendra'
  | 'nitin'
  | 'gowtham'
  | 'rana'
  | 'amala'
  | 'athira'
  | 'anubhuti'
  | 'prachi'
  | 'anto'
  | 'mani'
  | 'kesavan';

export interface UserTypes {
  id: UserIds;
  name: string;
}

export const userList: UserTypes[] = [
  { id: 'venkat', name: 'Venkataramanan' },
  { id: 'nitheesh', name: 'Nitheesh' },
  { id: 'gnana', name: 'Gnana Sekar' },
  { id: 'gnanendra', name: 'Gnanendra' },
  { id: 'nitin', name: 'Nitin Jenson' },
  { id: 'gowtham', name: 'Gowtham Haridass' },
  { id: 'rana', name: 'Rana Pratap' },
  { id: 'amala', name: 'Amala Hepsiba' },
  { id: 'athira', name: 'Athira S' },
  { id: 'anubhuti', name: 'Anubhuti Jha' },
  { id: 'prachi', name: 'Prachi Jain' },
  { id: 'anto', name: 'Anto Augustus' },
  { id: 'mani', name: 'Manikandan' },
  { id: 'kesavan', name: 'Kesavan' },
];

export const KEY_USER: Record<UserIds, string> = userList.reduce(
  (acc, curr) => {
    acc[curr.id] = curr.name;
    return acc;
  },
  {} as Record<UserIds, string>
);
