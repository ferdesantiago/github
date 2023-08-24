import React, { Fragment } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ChartProps } from "@/types";

const Chart: React.FC<ChartProps> = ({ data }): JSX.Element => {
  const getAllUniqueKeys = (data: any): string[] => {
    const allKeys = data.reduce((keys: string[], item: any) => {
      const itemKeys = Object.keys(item).filter(
        (key) => key !== "name" && key !== "id" && key !== "color"
      );
      return keys.concat(itemKeys);
    }, []);

    return Array.from(new Set(allKeys)) as string[];
  };

  const allUniqueKeys: string[] = getAllUniqueKeys(data);

  return (
    <Fragment>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          {allUniqueKeys.map((key: string) => {
            if (key !== "name" && key !== "id" && key !== "fullName") {
              return (
                <Fragment key={key}>
                  <Line
                    type="monotone"
                    dataKey={key}
                    stroke={
                      data.find((item) => item[key] !== undefined)
                        ?.color as string
                    }
                    activeDot={{ r: 8 }}
                  />
                </Fragment>
              );
            }
            return null;
          })}
        </LineChart>
      </ResponsiveContainer>
    </Fragment>
  );
};

export default Chart;
