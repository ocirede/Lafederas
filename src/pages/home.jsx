
import { AccordionDemo } from "@/components/features/accordion";
import { AlertDemo } from "@/components/features/alert";
import { AlertDialogDemo } from "@/components/features/alert-dialog";
import { AvatarDemo } from "@/components/features/avatar";
import { ButtonDemo } from "@/components/features/button";
import { CalendarDemo } from "@/components/features/calendar";
import { CardWithForm } from "@/components/features/card";
import { CollapsibleDemo } from "@/components/features/collapsible";
import { ComboboxDemo } from "@/components/features/combobox";
import { CommandDemo } from "@/components/features/command";
import { ContextMenuDemo } from "@/components/features/context-menu";
import { DataTableDemo } from "@/components/features/data-table";
import { DatePickerDemo } from "@/components/features/date-picker";
import { DialogDemo } from "@/components/features/dialog";
import { DropdownMenuDemo } from "@/components/features/dropdown-menu";

function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">

      <div>
         <AlertDemo />
        <ContextMenuDemo />
      </div>
    
      <AccordionDemo />

      <div>
        <ButtonDemo />
        <CollapsibleDemo />
      </div>

      <div>
        <AvatarDemo />
        <DropdownMenuDemo />
        <DialogDemo />
        <ComboboxDemo />
        <DatePickerDemo />
        <AlertDialogDemo />
      </div>

      <CalendarDemo />
      <CardWithForm />

      <CommandDemo />

      <DataTableDemo />
    </div>
  );
}
export default Home;



