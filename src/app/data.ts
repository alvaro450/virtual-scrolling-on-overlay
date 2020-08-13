export interface item {
  display: string;
  value: string | null;
  group?: boolean;
  subGroup?: boolean;
  belongsToSubGroupId?: number;
  id?: number;
  pid?: number;
  selected?: boolean;
  expanded?: boolean;
}

export const ITEMS: item[] = [
    {
      display: "Default",
      group: true,
      value: null,
      id: 1
    },
    {
      display: "John Smith",
      value: "F123",
      pid: 2
    },
    {
      display: "Jane Doe",
      value: "HTER",
      pid: 3
    },
    {
      display: "Will Doe",
      value: "IUYT",
      pid: 4
    },
    {
      display: "Favorites",
      group: true,
      value: null,
      id: 5
    },
    {
      display: "ASD Smith",
      value: "5656",
      pid: 6
    },
    {
      display: "df sdfasdf",
      value: "3434",
      pid: 7
    },
    {
      display: "erere dfgs",
      value: "5454",
      pid: 8
    },
    {
      display: "Advisors",
      group: true,
      value: null,
      id: 9
    },
    {
      subGroup: true,
      display: "MAT Branch",
      value: null,
      id: 10
    },
    {
      display: "trwert sgdfg",
      value: "3434",
      belongsToSubGroupId: 10,
      pid: 11
    },

    {
      display: "hjkghjk sfg",
      value: "6767",
      belongsToSubGroupId: 10,
      pid: 12
    },
    {
      display: "eerrr ssss",
      value: "8787",
      belongsToSubGroupId: 10,
      pid: 13
    },
    {
      display: "33U Branch",
      value: null,
      subGroup: true,
      id: 14
    },
    {
      display: "aaaaa sgdfg",
      value: "4444",
      belongsToSubGroupId: 14,
      pid: 15
    },
    {
      display: "wwwww sfg",
      value: "44441",
      belongsToSubGroupId: 14,
      pid: 16
    },
    {
      display: "ererererer ssss",
      value: "1111",
      belongsToSubGroupId: 14,
      pid: 17
    },
     {
      display: "aaaaa sgdfg",
      value: "4444",
      belongsToSubGroupId: 14,
      pid: 100
    },
    {
      display: "wwwww sfg",
      value: "44441",
      belongsToSubGroupId: 14,
      pid: 101
    },
    {
      display: "ererererer ssss",
      value: "1111",
      belongsToSubGroupId: 14,
      pid: 102
    }, {
      display: "aaaaa sgdfg",
      value: "4444",
      belongsToSubGroupId: 14,
      pid: 103
    },
    {
      display: "wwwww sfg",
      value: "44441",
      belongsToSubGroupId: 14,
      pid: 104
    },
    {
      display: "ererererer ssss",
      value: "1111",
      belongsToSubGroupId: 14,
      pid: 105
    },
    {
      display: "Default",
      group: true,
      value: null,
      id: 18
    },
    {
      display: "John Smith",
      value: "F123",
      pid: 19
    },
    {
      display: "Jane Doe",
      value: "HTER",
      pid: 20
    },
    {
      display: "Will Doe",
      value: "IUYT",
      pid: 21
    },
    {
      display: "Favorites",
      group: true,
      value: null,
      id: 22
    },
    {
      display: "ASD Smith",
      value: "5656",
      pid: 23
    },
    {
      display: "df sdfasdf",
      value: "3434",
      pid: 24
    },
    {
      display: "erere dfgs",
      value: "5454",
      pid: 25
    },
    {
      display: "Advisors",
      group: true,
      value: null,
      id: 26
    },
    {
      subGroup: true,
      display: "MAT Branch",
      value: null,
      id: 27
    },
    {
      display: "trwert sgdfg",
      value: "3434",
      belongsToSubGroupId: 27,
      pid: 28
    },

    {
      display: "hjkghjk sfg",
      value: "6767",
      belongsToSubGroupId: 27,
      pid: 29
    },
    {
      display: "eerrr ssss",
      value: "8787",
      belongsToSubGroupId: 27,
      pid: 30
    },
     {
      display: "trwert sgdfg",
      value: "3434",
      belongsToSubGroupId: 27,
      pid: 31
    },

    {
      display: "hjkghjk sfg",
      value: "6767",
      belongsToSubGroupId: 27,
      pid: 32
    },
    {
      display: "eerrr ssss",
      value: "8787",
      belongsToSubGroupId: 27,
      pid: 33
    }, {
      display: "trwert sgdfg",
      value: "3434",
      belongsToSubGroupId: 27,
      pid: 34
    },

    {
      display: "hjkghjk sfg",
      value: "6767",
      belongsToSubGroupId: 27,
      pid: 35
    },
    {
      display: "eerrr ssss",
      value: "8787",
      belongsToSubGroupId: 27,
      pid: 36
    }
  ];