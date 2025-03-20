import React, { useState, useEffect } from 'react';
import { 
    FaGoogle, FaSync, FaSignOutAlt, FaChartLine, FaSearch, 
    FaGlobe, FaDesktop, FaMobile, FaTablet, FaFile, 
    FaFlag, FaLink, FaEye, FaCalendar 
} from 'react-icons/fa';
import { ResponsiveBar } from '@nivo/bar';
import { ResponsivePie } from '@nivo/pie';
import { ResponsiveLine } from '@nivo/line';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { addDays, subDays, format } from 'date-fns';

const countryNames = {
    'AFG': 'Afghanistan',
    'ALB': 'Albania',
    'DZA': 'Algeria',
    'AND': 'Andorra',
    'AGO': 'Angola',
    'ARG': 'Argentina',
    'ARM': 'Armenia',
    'AUS': 'Australia',
    'AUT': 'Austria',
    'AZE': 'Azerbaijan',
    'BHS': 'Bahamas',
    'BHR': 'Bahrain',
    'BGD': 'Bangladesh',
    'BRB': 'Barbados',
    'BLR': 'Belarus',
    'BEL': 'Belgium',
    'BLZ': 'Belize',
    'BEN': 'Benin',
    'BTN': 'Bhutan',
    'BOL': 'Bolivia',
    'BIH': 'Bosnia and Herzegovina',
    'BWA': 'Botswana',
    'BRA': 'Brazil',
    'BRN': 'Brunei',
    'BGR': 'Bulgaria',
    'BFA': 'Burkina Faso',
    'BDI': 'Burundi',
    'KHM': 'Cambodia',
    'CMR': 'Cameroon',
    'CAN': 'Canada',
    'CPV': 'Cape Verde',
    'CAF': 'Central African Republic',
    'TCD': 'Chad',
    'CHL': 'Chile',
    'CHN': 'China',
    'COL': 'Colombia',
    'COM': 'Comoros',
    'COG': 'Congo',
    'CRI': 'Costa Rica',
    'HRV': 'Croatia',
    'CUB': 'Cuba',
    'CYP': 'Cyprus',
    'CZE': 'Czech Republic',
    'DNK': 'Denmark',
    'DJI': 'Djibouti',
    'DMA': 'Dominica',
    'DOM': 'Dominican Republic',
    'ECU': 'Ecuador',
    'EGY': 'Egypt',
    'SLV': 'El Salvador',
    'GNQ': 'Equatorial Guinea',
    'ERI': 'Eritrea',
    'EST': 'Estonia',
    'ETH': 'Ethiopia',
    'FJI': 'Fiji',
    'FIN': 'Finland',
    'FRA': 'France',
    'GAB': 'Gabon',
    'GMB': 'Gambia',
    'GEO': 'Georgia',
    'DEU': 'Germany',
    'GHA': 'Ghana',
    'GRC': 'Greece',
    'GRD': 'Grenada',
    'GTM': 'Guatemala',
    'GIN': 'Guinea',
    'GNB': 'Guinea-Bissau',
    'GUY': 'Guyana',
    'HTI': 'Haiti',
    'HND': 'Honduras',
    'HUN': 'Hungary',
    'ISL': 'Iceland',
    'IND': 'India',
    'IDN': 'Indonesia',
    'IRN': 'Iran',
    'IRQ': 'Iraq',
    'IRL': 'Ireland',
    'ISR': 'Israel',
    'ITA': 'Italy',
    'JAM': 'Jamaica',
    'JPN': 'Japan',
    'JOR': 'Jordan',
    'KAZ': 'Kazakhstan',
    'KEN': 'Kenya',
    'KIR': 'Kiribati',
    'PRK': 'North Korea',
    'KOR': 'South Korea',
    'KWT': 'Kuwait',
    'KGZ': 'Kyrgyzstan',
    'LAO': 'Laos',
    'LVA': 'Latvia',
    'LBN': 'Lebanon',
    'LSO': 'Lesotho',
    'LBR': 'Liberia',
    'LBY': 'Libya',
    'LIE': 'Liechtenstein',
    'LTU': 'Lithuania',
    'LUX': 'Luxembourg',
    'MKD': 'North Macedonia',
    'MDG': 'Madagascar',
    'MWI': 'Malawi',
    'MYS': 'Malaysia',
    'MDV': 'Maldives',
    'MLI': 'Mali',
    'MLT': 'Malta',
    'MHL': 'Marshall Islands',
    'MRT': 'Mauritania',
    'MUS': 'Mauritius',
    'MEX': 'Mexico',
    'FSM': 'Micronesia',
    'MDA': 'Moldova',
    'MCO': 'Monaco',
    'MNG': 'Mongolia',
    'MNE': 'Montenegro',
    'MAR': 'Morocco',
    'MOZ': 'Mozambique',
    'MMR': 'Myanmar',
    'NAM': 'Namibia',
    'NRU': 'Nauru',
    'NPL': 'Nepal',
    'NLD': 'Netherlands',
    'NZL': 'New Zealand',
    'NIC': 'Nicaragua',
    'NER': 'Niger',
    'NGA': 'Nigeria',
    'NOR': 'Norway',
    'OMN': 'Oman',
    'PAK': 'Pakistan',
    'PLW': 'Palau',
    'PSE': 'Palestine',
    'PAN': 'Panama',
    'PNG': 'Papua New Guinea',
    'PRY': 'Paraguay',
    'PER': 'Peru',
    'PHL': 'Philippines',
    'POL': 'Poland',
    'PRT': 'Portugal',
    'QAT': 'Qatar',
    'ROU': 'Romania',
    'RUS': 'Russia',
    'RWA': 'Rwanda',
    'KNA': 'Saint Kitts and Nevis',
    'LCA': 'Saint Lucia',
    'VCT': 'Saint Vincent and the Grenadines',
    'WSM': 'Samoa',
    'SMR': 'San Marino',
    'STP': 'São Tomé and Príncipe',
    'SAU': 'Saudi Arabia',
    'SEN': 'Senegal',
    'SRB': 'Serbia',
    'SYC': 'Seychelles',
    'SLE': 'Sierra Leone',
    'SGP': 'Singapore',
    'SVK': 'Slovakia',
    'SVN': 'Slovenia',
    'SLB': 'Solomon Islands',
    'SOM': 'Somalia',
    'ZAF': 'South Africa',
    'SSD': 'South Sudan',
    'ESP': 'Spain',
    'LKA': 'Sri Lanka',
    'SDN': 'Sudan',
    'SUR': 'Suriname',
    'SWZ': 'Eswatini',
    'SWE': 'Sweden',
    'CHE': 'Switzerland',
    'SYR': 'Syria',
    'TWN': 'Taiwan',
    'TJK': 'Tajikistan',
    'TZA': 'Tanzania',
    'THA': 'Thailand',
    'TLS': 'Timor-Leste',
    'TGO': 'Togo',
    'TON': 'Tonga',
    'TTO': 'Trinidad and Tobago',
    'TUN': 'Tunisia',
    'TUR': 'Turkey',
    'TKM': 'Turkmenistan',
    'TUV': 'Tuvalu',
    'UGA': 'Uganda',
    'UKR': 'Ukraine',
    'ARE': 'United Arab Emirates',
    'GBR': 'United Kingdom',
    'USA': 'United States',
    'URY': 'Uruguay',
    'UZB': 'Uzbekistan',
    'VUT': 'Vanuatu',
    'VAT': 'Vatican City',
    'VEN': 'Venezuela',
    'VNM': 'Vietnam',
    'YEM': 'Yemen',
    'ZMB': 'Zambia',
    'ZWE': 'Zimbabwe'
};

const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899'];

const SearchConsoleAnalytics = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [needsAuth, setNeedsAuth] = useState(false);
    const [activeTab, setActiveTab] = useState('queries');
    const [dateRange, setDateRange] = useState([
        subDays(new Date(), 30),
        new Date()
    ]);
    const [startDate, endDate] = dateRange;
    const [dataState, setDataState] = useState(null);

    const fetchAnalytics = async () => {
        if (!startDate || !endDate) return;
        
        setLoading(true);
        try {
            const auth = localStorage.getItem('dashboardAuth');
            const formattedStartDate = format(startDate, 'yyyy-MM-dd');
            const formattedEndDate = format(endDate, 'yyyy-MM-dd');
            
            console.log(`Fetching data from ${formattedStartDate} to ${formattedEndDate}`);
            
            const response = await fetch(
                `https://backend-logic-lght-849100326888.europe-west1.run.app/api/analytics/search-analytics?startDate=${formattedStartDate}&endDate=${formattedEndDate}`,
                {
                    headers: {
                        'Authorization': `Basic ${auth}`
                    }
                }
            );

            const result = await response.json();
            
            if (response.status === 401 && result.authUrl) {
                setNeedsAuth(true);
                setError('Authentication required');
                setData(null);
            } else if (!response.ok) {
                throw new Error(result.message || 'Failed to fetch analytics');
            } else {
                setData(result);
                setDataState(result.metadata);
                setNeedsAuth(false);
                setError(null);
            }
        } catch (err) {
            console.error('Fetch error:', err);
            setError(err.message);
            if (err.message.includes('Authentication required')) {
                setNeedsAuth(true);
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (startDate && endDate) {
            fetchAnalytics();
        }
    }, [startDate, endDate]);

    const handleReconnect = async () => {
        try {
            const auth = localStorage.getItem('dashboardAuth');
            const response = await fetch('https://backend-logic-lght-849100326888.europe-west1.run.app/api/analytics/google/auth', {
                headers: {
                    'Authorization': `Basic ${auth}`
                }
            });
            
            if (!response.ok) throw new Error('Failed to get auth URL');
            
            const { authUrl } = await response.json();
            window.location.href = authUrl;
        } catch (err) {
            setError('Failed to initiate reconnection');
        }
    };

    const handleLogout = async () => {
        try {
            const auth = localStorage.getItem('dashboardAuth');
            const response = await fetch('https://backend-logic-lght-849100326888.europe-west1.run.app/api/analytics/google/logout', {
                method: 'POST',
                headers: {
                    'Authorization': `Basic ${auth}`
                }
            });
            
            if (response.ok) {
                setNeedsAuth(true);
                setData(null);
                setError('Logged out of Search Console');
            }
        } catch (err) {
            setError('Failed to logout');
        }
    };

    const formatCountryName = (code) => {
        // Convert to uppercase to match our keys
        const upperCode = code.toUpperCase();
        return countryNames[upperCode] || code;
    };

    const renderDeviceIcon = (device) => {
        switch (device.toLowerCase()) {
            case 'mobile': return <FaMobile className="w-4 h-4" />;
            case 'tablet': return <FaTablet className="w-4 h-4" />;
            case 'desktop': return <FaDesktop className="w-4 h-4" />;
            default: return <FaDesktop className="w-4 h-4" />;
        }
    };

    const renderBarChart = (data) => {
        if (!data || !data.rows || data.rows.length === 0) return null;

        const chartData = data.rows
            .slice(0, 10)
            .map(row => ({
                name: row.keys[0],
                clicks: row.clicks,
                impressions: row.impressions,
                ctr: (row.ctr * 100).toFixed(2)
            }));

        return (
            <div className="h-[400px]">
                <ResponsiveBar
                    data={chartData}
                    keys={['clicks', 'impressions']}
                    indexBy="name"
                    margin={{ top: 50, right: 130, bottom: 100, left: 60 }}
                    padding={0.3}
                    valueScale={{ type: 'linear' }}
                    colors={['#3B82F6', '#10B981']}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: -45,
                        legend: activeTab === 'queries' ? 'Query' : 'Page',
                        legendPosition: 'middle',
                        legendOffset: 70
                    }}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Count',
                        legendPosition: 'middle',
                        legendOffset: -40
                    }}
                    legends={[
                        {
                            dataFrom: 'keys',
                            anchor: 'bottom-right',
                            direction: 'column',
                            justify: false,
                            translateX: 120,
                            translateY: 0,
                            itemsSpacing: 2,
                            itemWidth: 100,
                            itemHeight: 20,
                            itemDirection: 'left-to-right',
                            itemOpacity: 0.85,
                            symbolSize: 20
                        }
                    ]}
                />
            </div>
        );
    };

    const renderPieChart = (data) => {
        if (!data || !data.rows || data.rows.length === 0) return null;

        const chartData = data.rows.map(row => ({
            id: activeTab === 'countries' ? formatCountryName(row.keys[0]) : row.keys[0],
            label: activeTab === 'countries' ? formatCountryName(row.keys[0]) : row.keys[0],
            value: row.clicks
        }));

        return (
            <div className="h-[400px]">
                <ResponsivePie
                    data={chartData}
                    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                    innerRadius={0.5}
                    padAngle={0.7}
                    cornerRadius={3}
                    activeOuterRadiusOffset={8}
                    colors={COLORS}
                    borderWidth={1}
                    borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                    arcLinkLabelsSkipAngle={10}
                    arcLinkLabelsTextColor="#333333"
                    arcLinkLabelsThickness={2}
                    arcLinkLabelsColor={{ from: 'color' }}
                    arcLabelsSkipAngle={10}
                    arcLabelsTextColor="white"
                    legends={[
                        {
                            anchor: 'bottom',
                            direction: 'row',
                            justify: false,
                            translateX: 0,
                            translateY: 56,
                            itemsSpacing: 0,
                            itemWidth: 100,
                            itemHeight: 18,
                            itemTextColor: '#999',
                            itemDirection: 'left-to-right',
                            itemOpacity: 1,
                            symbolSize: 18,
                            symbolShape: 'circle'
                        }
                    ]}
                />
            </div>
        );
    };

    const renderCharts = (data) => {
        switch (activeTab) {
            case 'queries':
            case 'pages':
                return renderBarChart(data);
            case 'countries':
            case 'devices':
            case 'searchAppearance':
                return renderPieChart(data);
            default:
                return null;
        }
    };

    const renderMetrics = (rows = []) => {
        if (!rows.length) return null;
        
        const totalClicks = rows.reduce((sum, row) => sum + (row.clicks || 0), 0);
        const totalImpressions = rows.reduce((sum, row) => sum + (row.impressions || 0), 0);
        const avgPosition = rows.reduce((sum, row) => sum + (row.position || 0), 0) / rows.length;
        const avgCTR = (totalClicks / totalImpressions) * 100;

        return (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500">Total Clicks</p>
                            <p className="mt-1 text-2xl font-semibold">{totalClicks.toLocaleString()}</p>
                        </div>
                        <div className="rounded-full p-3 text-blue-500 bg-blue-50">
                            <FaSearch className="w-6 h-6" />
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500">Total Impressions</p>
                            <p className="mt-1 text-2xl font-semibold">{totalImpressions.toLocaleString()}</p>
                        </div>
                        <div className="rounded-full p-3 text-green-500 bg-green-50">
                            <FaEye className="w-6 h-6" />
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500">Average CTR</p>
                            <p className="mt-1 text-2xl font-semibold">{avgCTR.toFixed(2)}%</p>
                        </div>
                        <div className="rounded-full p-3 text-purple-500 bg-purple-50">
                            <FaChartLine className="w-6 h-6" />
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500">Average Position</p>
                            <p className="mt-1 text-2xl font-semibold">{avgPosition.toFixed(1)}</p>
                        </div>
                        <div className="rounded-full p-3 text-orange-500 bg-orange-50">
                            <FaFlag className="w-6 h-6" />
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const renderDatePicker = () => (
        <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2 text-sm text-gray-600">
                <FaCalendar className="text-gray-400" />
                <span>Date Range:</span>
            </div>
            <DatePicker
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => {
                    setDateRange(update);
                    if (update[0] && update[1]) {
                        // Both dates are selected, trigger fetch
                        setDateRange(update);
                    }
                }}
                maxDate={new Date()}
                className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <div className="flex gap-2">
                <button
                    onClick={() => setDateRange([subDays(new Date(), 7), new Date()])}
                    className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg"
                >
                    Last 7 days
                </button>
                <button
                    onClick={() => setDateRange([subDays(new Date(), 30), new Date()])}
                    className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg"
                >
                    Last 30 days
                </button>
                <button
                    onClick={() => setDateRange([subDays(new Date(), 90), new Date()])}
                    className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg"
                >
                    Last 90 days
                </button>
            </div>
        </div>
    );

    const renderDateInfo = () => {
        if (!dataState) return null;
        
        const fetchedAt = new Date(dataState.fetchedAt);
        const minutesAgo = Math.floor((Date.now() - fetchedAt.getTime()) / 60000);
        
        return (
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <span>Last updated: {minutesAgo < 60 
                    ? `${minutesAgo} minutes ago`
                    : fetchedAt.toLocaleString()
                }</span>
                {minutesAgo > 360 && ( // Show refresh button if data is older than 6 hours
                    <button
                        onClick={fetchAnalytics}
                        className="text-blue-500 hover:text-blue-600"
                        title="Refresh data"
                    >
                        <FaSync className="w-4 h-4" />
                    </button>
                )}
            </div>
        );
    };

    const renderContent = () => {
        if (!data) return null;

        const currentData = data[activeTab];
        if (!currentData || !currentData.rows || currentData.rows.length === 0) {
            return (
                <div className="text-center py-8">
                    <p className="text-gray-600">No data available for {activeTab}</p>
                </div>
            );
        }

        return (
            <div className="space-y-6">
                {renderMetrics(currentData.rows)}
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    {renderCharts(currentData)}
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="text-left text-sm text-gray-500">
                                <th className="pb-3">{activeTab === 'queries' ? 'Query' : 
                                                    activeTab === 'pages' ? 'Page' :
                                                    activeTab === 'countries' ? 'Country' :
                                                    activeTab === 'devices' ? 'Device' : 'Type'}</th>
                                <th className="pb-3">Clicks</th>
                                <th className="pb-3">Impressions</th>
                                <th className="pb-3">CTR</th>
                                <th className="pb-3">Position</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {currentData.rows.map((row, index) => (
                                <tr key={index} className="border-t border-gray-200">
                                    <td className="py-2 flex items-center gap-2">
                                        {activeTab === 'devices' && renderDeviceIcon(row.keys[0])}
                                        {activeTab === 'countries' ? formatCountryName(row.keys[0]) : row.keys[0]}
                                    </td>
                                    <td className="py-2">{row.clicks}</td>
                                    <td className="py-2">{row.impressions}</td>
                                    <td className="py-2">{(row.ctr * 100).toFixed(2)}%</td>
                                    <td className="py-2">{row.position.toFixed(1)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };

    return (
        <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold">Search Console Analytics</h2>
                    <div className="flex items-center gap-2">
                        {needsAuth ? (
                            <button
                                onClick={handleReconnect}
                                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                            >
                                <FaGoogle />
                                <span>Connect to Search Console</span>
                            </button>
                        ) : (
                            <>
                                <button
                                    onClick={fetchAnalytics}
                                    className="p-2 text-gray-400 hover:text-gray-600"
                                    title="Refresh data"
                                >
                                    <FaSync />
                                </button>
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                                    title="Disconnect from Search Console"
                                >
                                    <FaSignOutAlt />
                                    <span>Disconnect</span>
                                </button>
                            </>
                        )}
                    </div>
                </div>

                {!needsAuth && (
                    <>
                        {renderDatePicker()}
                        {renderDateInfo()}
                    </>
                )}

                {loading ? (
                    <div className="text-center py-8 text-gray-500">Loading analytics...</div>
                ) : error ? (
                    <div className="text-center py-8">
                        {needsAuth ? (
                            <div className="space-y-4">
                                <p className="text-gray-600">Connect to Google Search Console to view analytics</p>
                            </div>
                        ) : (
                            <p className="text-red-500">{error}</p>
                        )}
                    </div>
                ) : (
                    <>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {[
                                { id: 'queries', label: 'Top Queries', icon: FaSearch },
                                { id: 'pages', label: 'Top Pages', icon: FaFile },
                                { id: 'countries', label: 'Countries', icon: FaFlag },
                                { id: 'devices', label: 'Devices', icon: FaDesktop },
                                { id: 'searchAppearance', label: 'Search Appearance', icon: FaEye }
                            ].map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                                        activeTab === tab.id 
                                            ? 'bg-blue-500 text-white shadow-md' 
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    <tab.icon className="w-4 h-4" />
                                    <span>{tab.label}</span>
                                </button>
                            ))}
                        </div>
                        {renderContent()}
                    </>
                )}
            </div>
        </div>
    );
};

export default SearchConsoleAnalytics;