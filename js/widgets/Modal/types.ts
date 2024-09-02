import { TitleData } from '../../ui/Title/types';
import { InputData } from '../../features/FieldsInput/types';
import { SelectData } from '../../features/FieldsInput/types';
import { CheckBoxData } from '../../ui/Checkbox/types';

export type ModalData = {
  title: TitleData;
  input: InputData[];
  select: SelectData[];
  selectText: string;
  checkbox: CheckBoxData;
  buttonText: string;
};
