export interface Props {
  id?: string;
  name?: string;
  role?: string;
  year?: string;
  minDescription?: string;
  descriptionWork?: string;
  link?: string;
  platform?: string;
  stack?: string;
  front?: string;
  back?: string;
  images?: [
    {
      nameImage: string;
    }
  ];
  status?: boolean;
}
