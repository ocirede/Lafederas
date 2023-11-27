import { AlertDialogDemo } from "@/components/features/alert-dialog";
import { AvatarDemo } from "@/components/features/avatar";
import { CalendarDemo } from "@/components/features/calendar";
import { ComboboxDemo } from "@/components/features/combobox";
import { DatePickerDemo } from "@/components/features/date-picker";
import { DialogDemo } from "@/components/features/dialog";
import { DropdownMenuDemo } from "@/components/features/dropdown-menu";

function About() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div>
        <AvatarDemo />
        <DropdownMenuDemo />
        <DialogDemo />
        <ComboboxDemo />
        <DatePickerDemo />
        <AlertDialogDemo />
      </div>

      <CalendarDemo />
    </div>
  );
}
export default About;
