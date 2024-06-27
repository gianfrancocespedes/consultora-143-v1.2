import { DonutChart } from '@tremor/react';

const sales = [
    {
        name: 'Lima',
        sales: 9800,
    },
    {
        name: 'Arequipa',
        sales: 4560,
    },
    {
        name: 'Cuzco',
        sales: 3900,
    },
    {
        name: 'Trujillo',
        sales: 2400,
    },
    {
        name: 'Otros',
        sales: 1900,
    },
    {
        name: 'Extranjero',
        sales: 1390,
    },
];

const valueFormatter = (number) => `S/ ${Intl.NumberFormat('us').format(number).toString()}`;

export function DonutChartGraph() {

    const customTooltip = (props) => {
        const { payload, active } = props;
        if (!active || !payload) return null;
        const categoryPayload = payload?.[0];
        if (!categoryPayload) return null;
        return (
            <div className="w-56 rounded-tremor-default border border-tremor-border bg-tremor-background p-2 text-tremor-default shadow-tremor-dropdown">
                <div className="flex flex-1 space-x-2.5">
                    <div
                        className={`flex w-1.5 flex-col bg-${categoryPayload?.color}-500 rounded`}
                    />
                    <div className="w-full">
                        <div className="flex items-center justify-between space-x-8">
                            <p className="whitespace-nowrap text-right text-tremor-content">
                                {categoryPayload.name}
                            </p>
                            <p className="whitespace-nowrap text-right font-medium text-tremor-content-emphasis">
                                {categoryPayload.value}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="col-span-12 grid grid-cols-12 gap-2 ">
            <h3 className="text-lg font-semibold col-span-12 dark:text-white">
                Ventas por regiones (Últimos 3 meses)
            </h3>
            <DonutChart
                className="col-span-12 h-72"
                data={sales}
                category="sales"
                index="name"
                valueFormatter={valueFormatter}
                customTooltip={customTooltip}
            />
        </div>
    );
}