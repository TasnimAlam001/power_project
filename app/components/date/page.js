"use client";
import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Button } from "@mui/material";
import { CalendarIcon, DateRangePicker } from "@mui/x-date-pickers-pro";

export default function Date() {
  return (
    <div className="flex gap-3 items-center w-2/5">
      <p>From</p>
      <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateRangePicker slotProps={{ fieldSeparator: { children: 'to' },
        textField: { size: 'small',InputProps: { endAdornment: <CalendarIcon /> }, color:"success"  },
        }} 
        
        
        />
        </LocalizationProvider>
      </div>

      <div>
        <Button variant="contained" className="text-white bg-green-700">Filter</Button>
      </div>
    </div>
  );
}
