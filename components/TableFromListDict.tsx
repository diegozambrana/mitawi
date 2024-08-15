import {
  Box,
  Table,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
} from "@mantine/core";
import { FC, useMemo } from "react";

type TableFromListDictType = {
  data: { [key: string]: any }[];
};

export const TableFromListDict: FC<TableFromListDictType> = ({ data }) => {
  const columns = useMemo(() => {
    console.log(data);
    if (data.length > 0) return Object.keys(data[0]);
    return [];
  }, [data]);
  return (
    <Box>
      <Table>
        <TableThead>
          <TableTr>
            {columns.map((column) => (
              <TableTh key={`yf_th_${column}`}>{column}</TableTh>
            ))}
          </TableTr>
        </TableThead>

        <TableTbody>
          {data.map((d) => (
            <TableTr key={`yf_tr_${d[columns[0]]}`}>
              {columns.map((column, index) => (
                <TableTd key={`yf_td_${column}_${index}`}>{d[column]}</TableTd>
              ))}
            </TableTr>
          ))}
        </TableTbody>
      </Table>
    </Box>
  );
};
