import { AreaChart } from '@tremor/react';

const chartdata = [
    {
        date: 'Ene 22',
        'Asesorías': 2890,
        'Elaboración': 2338,
    },
    {
        date: 'Feb 22',
        'Asesorías': 2756,
        'Elaboración': 2103,
    },
    {
        date: 'Mar 22',
        'Asesorías': 3322,
        'Elaboración': 2194,
    },
    {
        date: 'Abr 22',
        'Asesorías': 3470,
        'Elaboración': 2108,
    },
    {
        date: 'May 22',
        'Asesorías': 3475,
        'Elaboración': 1812,
    },
    {
        date: 'Jun 22',
        'Asesorías': 3129,
        'Elaboración': 1726,
    },
    {
        date: 'Jul 22',
        'Asesorías': 3490,
        'Elaboración': 1982,
    },
    {
        date: 'Ago 22',
        'Asesorías': 2903,
        'Elaboración': 2012,
    },
    {
        date: 'Sep 22',
        'Asesorías': 2643,
        'Elaboración': 2342,
    },
    {
        date: 'Oct 22',
        'Asesorías': 2837,
        'Elaboración': 2473,
    },
    {
        date: 'Nov 22',
        'Asesorías': 2954,
        'Elaboración': 3848,
    },
    {
        date: 'Dic 22',
        'Asesorías': 3239,
        'Elaboración': 3736,
    },
];

const dataFormatter = (number) =>
    `S/ ${Intl.NumberFormat('us').format(number).toString()}`;

export function AreaChartGraph() {
    return (
        <div className="col-span-12 grid grid-cols-12">
            <h3 className="text-lg font-semibold col-span-12 dark:text-white">Ventas por mes</h3>
            <AreaChart
                className="h-80 col-span-12"
                data={chartdata}
                index="date"
                categories={['Asesorías', 'Elaboración']}
                colors={['indigo', 'rose']}
                valueFormatter={dataFormatter}
                yAxisWidth={60}
                onValueChange={(v) => console.log(v)}
            />
        </div>
    );
}