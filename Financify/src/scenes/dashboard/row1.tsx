/* eslint-disable @typescript-eslint/no-unused-vars */

import DashboardBox from '@/components/DashboardBox';
import { useGetKpisQuery } from '@/state/api';
import { useTheme } from '@mui/material';
import  { useMemo } from 'react';
import BoxHeader from '@/components/BoxHeader';
import { AreaChart, Bar, BarChart, Area,Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, LineChart } from 'recharts';



const Row1 = () => {
  const {data}=  useGetKpisQuery();

  const {palette} = useTheme();
  
  const revenueExpenses = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name: month.substring(0, 3),
          revenue: revenue,
          expenses: expenses,
        };
      })
    );
  }, [data]);


  const revenueProfit = useMemo(() =>  {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name: month.substring(0, 3),
          revenue: revenue,
          profit: (revenue - expenses).toFixed(2),
        };
      })
    );
  }, [data]);

  const revenue = useMemo(() =>  {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue}) => {
        return {
          name: month.substring(0, 3),
          revenue: revenue,
        };
      })
    );
  }, [data]);


  return (
    <>
    <DashboardBox gridArea="a">
    <BoxHeader
          title="Expenses and Revenue"
          subtitle="bottom line represents expenses,top line represents revenue."
          sideText="+4%"
        />
      <ResponsiveContainer width="100%" height="100%" >
          <AreaChart
              
              width={500}
              height={400}
              data= {revenueExpenses}
              margin={{
                top: 15,
                right: 25,
                left: -10,
                bottom: 60,
              }}>

            
            <defs>
              <linearGradient id='colorRevenue' x1="0" y1={0} x2={0} y2={1}  >
                <stop offset="5%" stopColor={palette.primary[500]} stopOpacity={0.5} />
                <stop offset="95%" stopColor={palette.primary[500]} stopOpacity={0} />
              </linearGradient>

              <linearGradient id='colorExpense' x1="0" y1={0} x2={0} y2={1} >
                <stop offset="5%" stopColor={palette.primary[500]} stopOpacity={0.5} />
                <stop offset="95%" stopColor={palette.primary[500]} stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="name" 
              tickLine={false} 
              style={{fontSize: '12px'}}
            />
            <YAxis 
              tickLine={false} 
              axisLine={{strokeWidth: "0"}}
              style={{fontSize: '12px'}} 
              domain={[800, 23000]}/>
            <Tooltip />
            <Area   dot={true} type="monotone" dataKey="revenue" stroke={palette.primary.main} fillOpacity={1} fill="url(#colorRevenue)" />
            <Area dot= {true} type="monotone" dataKey="expenses" stroke={palette.primary.main} fillOpacity={1} fill="url(#colorExpenses)" />
          </AreaChart>

          
        </ResponsiveContainer>
    </DashboardBox>
    <DashboardBox gridArea="b">
        <BoxHeader
          title="Profit and Revenue"
          subtitle="top line represents revenue, bottom line represents expenses"
          sideText="+4%"
        />
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={400}
            data={revenueProfit}
            margin={{
              top: 20,
              right: 0,
              left: -10,
              bottom: 55,
            }}
          >
            <CartesianGrid vertical={false} stroke={"#808080"} />
            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              yAxisId="left"
              tickLine={false}
              axisLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tickLine={false}
              axisLine={false}
              style={{ fontSize: "10px" }}
            />
            <Tooltip />
            <Legend
              height={20}
              wrapperStyle={{
                margin: "0 0 10px 0",
              }}
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="profit"
              stroke={palette.tertiary[500]}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="revenue"
              stroke={palette.primary.main}
            />
          </LineChart>
        </ResponsiveContainer>
      </DashboardBox>
    <DashboardBox gridArea="c">
      <BoxHeader
            title="Revenue By Month"
            subtitle="Bar chart representing revenue month by month."
            sideText="+4%"
          />

      <ResponsiveContainer width="100%" height="100%">
      <BarChart
            width={500}
            height={300}
            data={revenue}
            margin={{
              top: 17,
              right: 15,
              left: -5,
              bottom: 58,
            }}
          >
            <CartesianGrid vertical={false} stroke={"#F5F5F5"} />
            <defs>
              <linearGradient id="colorBar" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[500]}
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[500]}
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <Tooltip />
            <Bar dataKey="revenue" fill={'url(#colorBar)'}/>
          </BarChart>
        </ResponsiveContainer>
    </DashboardBox>
      
    </>
  )
}

export default Row1;