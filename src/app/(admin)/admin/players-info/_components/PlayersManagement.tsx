"use client";
import DeleteAction from "@/components/core/DeleteAction";
import EditIcon from "@/components/core/icons/dashboard/EditIcon";
import MenuIcon from "@/components/core/icons/publicIcon/MenuIcon";
import SearchInput from "@/components/core/inputs/SearchInput";
import DashboardTable, {
  DashboardTableColumn,
} from "@/components/core/table/DashboardTable";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { playersData } from "@/data/dummy.data";
import { PlayerType } from "@/model/player.type";
import Image from "next/image";
import { FC, useState } from "react";

const PlayersManagement = () => {
  const TableColumn: DashboardTableColumn[] = [
    {
      title: "Name",
      dataKey: "name",
      row: (data: PlayerType) => (
        <div className=" min-w-[100px] max-w-[350px]  font-normal">
          <div className="flex flex-col md:flex-row gap-2">
            <div className="shrink-0 inline-block w-12 h-12">
              <Image
                className="object-cover rounded-[10px] w-full h-full"
                src={
                  data.player_image ||
                  "https://placehold.co/100x100/e2e2db/red/png"
                }
                alt={data.player_name || ""}
                width={50}
                height={50}
                priority
              />
            </div>
            <p className="line-clamp-2 text-w-paragraph-regular-20">
              {data.player_name}
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Country",
      dataKey: "country",
      row: (data: PlayerType) => (
        <div>
          <p className="line-clamp-1 bg-oc-primary-4-100 w-fit px-2 rounded-full  text-black">
            {data.country}
          </p>
        </div>
      ),
    },
    {
      title: "Role",
      dataKey: "player_role",
      row: (data: PlayerType) => (
        <div>
          <p className="line-clamp-2  w-fit px-1 rounded-full text-xl text-oc-primary-2-500 dark:text-oc-primary-2-300">
            {data.player_role || "N/A"}
          </p>
        </div>
      ),
    },

    {
      title: "Date",
      dataKey: "activeYear",
      row: (data: PlayerType) => (
        <div className="text-w-small-regular-16 min-w-[100px] max-w-[300px]">
          <p className="line-clamp-2">{data.activeYear || "N/A"}</p>
        </div>
      ),
    },

    {
      title: "Action",
      dataKey: "action",
      row: (data: PlayerType) => (
        <div className="flex justify-end items-center">
          <TableAction data={data} />
        </div>
      ),
    },
  ];

  type tableActionType = {
    data: PlayerType;
  };
  const TableAction: FC<tableActionType> = ({ data }) => (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="text-2xl font-bold">
          <MenuIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-20 w-[180px]">
          <div>
            <div className="hover:bg-c-violet-50">
              <div className="cursor-pointer flex gap-2 p-2  w-full items-center">
                <EditIcon /> <span>Edit</span>
              </div>
            </div>
            <div className="hover:bg-c-violet-50 w-full p-2 ">
              <DeleteAction
                handleDeleteSubmit={() => undefined}
                isLoading={false}
              />
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );

  const [selectedRole, setselectedRole] = useState("BATSMAN");

  const filteredRoled = selectedRole
    ? playersData.filter((user) => user.player_role === selectedRole)
    : playersData;

  const handleRoleClick = (role: string) => {
    setselectedRole((prevRole) => (prevRole === role ? "" : role));
  };
  return (
    <div className="space-y-10">
      {/* Headings */}
      <div className="flex justify-between items-center">
        <div className="relative">
          <div className="absolute z-20 left-2 -top-2 w-7 h-7 lg:w-10 lg:h-10 rounded-full bg-c-violet-100 blur-sm"></div>
          <div className="absolute z-20 -left-4 w-7 h-7 lg:w-10 lg:h-10 rounded-full bg-cyan-200 blur-sm  "></div>
          <p className="text-4xl font-semibold z-30 relative">{"Players"}</p>
        </div>
        <div>
          <SearchInput handleSearchSubmit={() => undefined} />
        </div>
      </div>
      <div className="space-y-5">
        <div className="flex space-x-4 mb-4">
          <button
            onClick={() => setselectedRole("")}
            className={`px-5 rounded-full py-1.5 ${
              selectedRole === ""
                ? "bg-c-violet-500 text-white"
                : "bg-c-grey-50"
            }`}
          >
            All
          </button>
          <button
            onClick={() => handleRoleClick("BATSMAN")}
            className={`px-5 rounded-full py-1.5 ${
              selectedRole === "BATSMAN"
                ? "bg-c-violet-500 text-white"
                : "bg-c-grey-50"
            }`}
          >
            Batsman
          </button>
          <button
            onClick={() => handleRoleClick("BOWLER")}
            className={`px-5 rounded-full py-1.5 ${
              selectedRole === "BOWLER"
                ? "bg-c-violet-500 text-white"
                : "bg-c-grey-50"
            }`}
          >
            Bowler
          </button>
        </div>
        <DashboardTable
          columns={TableColumn}
          isLoading={false}
          data={filteredRoled || []}
        />
      </div>
    </div>
  );
};

export default PlayersManagement;
