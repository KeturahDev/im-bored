export type Type = 'charity'|  'cooking' | 'music' | 'diy' | 'education' | 'social' | 'busywork' | 'recreational' | 'relaxation';

export type Accessibility = 'Few to no challenges' | 'Minor challenges' | 'Major challenges';

export type Duration = 'minutes' | 'hours' | 'days' | 'weeks';

export interface Activity {
  activity: string;
  type: Type;
  participants: number;
  price: number;
  accessibility?: Accessibility;
  duration?: Duration;
}

export type Details = "solo" | "group"