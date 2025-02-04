import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";

const data = [
  {
    blogHeading: "Top 10 Travel Destinations in 2025",
    category: "Travel",
    shortDescription:
      "Discover the most breathtaking destinations to visit in 2025.",
    description:
      "From exotic islands to hidden gems, we list the top 10 places you must visit in 2025. Whether you love adventure, history, or relaxing beaches, there's a destination for everyone.",
    image: "https://example.com/uploads/travel-2025.jpg",
  },
  {
    blogHeading: "Healthy Eating: A Guide to Nutritious Meals",
    category: "Health",
    shortDescription: "Simple tips and recipes to maintain a healthy diet.",
    description:
      "Eating healthy is not about restrictions, but making smarter choices. In this blog, we share easy-to-make nutritious meals, tips for a balanced diet, and how to stay healthy without giving up on taste.",
    image: "https://example.com/uploads/healthy-eating.jpg",
  },
  {
    blogHeading: "The Rise of Electric Vehicles",
    category: "Automobile",
    shortDescription: "How EVs are shaping the future of transportation.",
    description:
      "Electric Vehicles (EVs) are becoming more common with advancements in battery technology and increased environmental concerns. We discuss the pros and cons, the best EV models, and what the future of transportation looks like.",
    image: "https://example.com/uploads/electric-vehicles.jpg",
  },
  {
    blogHeading: "Financial Freedom: A Beginner’s Guide",
    category: "Finance",
    shortDescription:
      "Learn how to manage money, invest wisely, and achieve financial freedom.",
    description:
      "Managing money is a skill everyone should master. This blog covers saving strategies, investment tips, and methods to become financially independent.",
    image: "https://example.com/uploads/finance-guide.jpg",
  },
  {
    blogHeading: "The Best Workout Routines for Busy People",
    category: "Fitness",
    shortDescription:
      "Short and effective workouts to stay fit with a busy schedule.",
    description:
      "You don't need hours in the gym to stay fit. We share quick and effective workout routines that fit into even the busiest schedules.",
    image: "https://example.com/uploads/workout-routines.jpg",
  },
  {
    blogHeading: "The Impact of Social Media on Mental Health",
    category: "Psychology",
    shortDescription:
      "Understanding the positive and negative effects of social media.",
    description:
      "Social media is a double-edged sword. It connects us, but it also affects mental health. In this blog, we explore its impact and ways to use it responsibly.",
    image: "https://example.com/uploads/social-media-mental-health.jpg",
  },
  {
    blogHeading: "How to Start a Successful Online Business",
    category: "Business",
    shortDescription:
      "A step-by-step guide to launching a profitable online business.",
    description:
      "Want to start an online business? From choosing a niche to marketing strategies, this blog covers everything you need to build a successful online business.",
    image: "https://example.com/uploads/online-business.jpg",
  },
  {
    blogHeading: "Space Exploration: What's Next?",
    category: "Science",
    shortDescription:
      "Upcoming space missions and the future of space exploration.",
    description:
      "With new space missions planned by NASA, SpaceX, and other agencies, the future of space exploration is exciting. We discuss upcoming projects and their significance.",
    image: "https://example.com/uploads/space-exploration.jpg",
  },
  {
    blogHeading: "The Importance of Mindfulness in Daily Life",
    category: "Self-Improvement",
    shortDescription:
      "How mindfulness can improve your mental and emotional well-being.",
    description:
      "Practicing mindfulness helps reduce stress and improve focus. This blog covers mindfulness techniques and how to incorporate them into daily life.",
    image: "https://example.com/uploads/mindfulness.jpg",
  },
];

export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "blogHeading",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Blog Heading
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("blogHeading")}</div>
    ),
  },
  {
    accessorKey: "category",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Category
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("category")}</div>
    ),
  },
  {
    accessorKey: "shortDescription",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Short Description
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("shortDescription")}</div>
    ),
  },
  {
    accessorKey: "description",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Description
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("description")}</div>
    ),
  },
  {
    accessorKey: "image",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Image
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("image")}</div>,
  },

  {
    id: "actions",
    enableHiding: false,
    cell: () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
const Settings = () => {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="flex flex-1">
      <div className="p-2 md:p-10  rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
        <div className="w-full overflow-auto border dark:text-white border-gray-500 p-5 rounded-lg shadow-2xl">
          <div className="flex items-center py-4">
            <Input
              placeholder="Filter Blog Heading..."
              value={table.getColumn("blogHeading")?.getFilterValue() ?? ""}
              onChange={(event) =>
                table
                  .getColumn("blogHeading")
                  ?.setFilterValue(event.target.value)
              }
              className="max-w-sm"
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                  Columns <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className="capitalize"
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) =>
                          column.toggleVisibility(!!value)
                        }
                      >
                        {column.id}
                      </DropdownMenuCheckboxItem>
                    );
                  })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="rounded-md border dark:border-gray-500 dark:text-white">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <div className="flex items-center justify-end space-x-2 py-4">
            <div className="flex-1 text-sm text-muted-foreground">
              {table.getFilteredSelectedRowModel().rows.length} of{" "}
              {table.getFilteredRowModel().rows.length} row(s) selected.
            </div>
            <div className="space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
