import { Heart, Activity, Watch, Home, Hospital, AlertCircle, Tablet, Info, MapPin, Brain, Bluetooth, ShieldCheck, Users, DollarSign, Signal, GraduationCap, Lock, MessageSquare } from 'lucide-react';

export const DATA = {
  title: "Connected Aging",
  subtitle: "Wearable and Home-Monitoring Health Devices for Adults 65+ in Japan, South Korea, China, the United States, and the United Kingdom",
  intro: "Health monitoring is moving beyond hospitals and into homes, care facilities, and everyday life. For older adults, wearable and home-monitoring devices can help detect falls, monitor chronic disease, support medication routines, and connect patients to caregivers or clinicians.",
  
  researchQuestions: [
    { id: 1, text: "What wearable and home-monitoring health devices are most commonly used among adults 65+?", icon: Watch },
    { id: 2, text: "How do the leading device categories differ across the five countries?", icon: MapPin },
    { id: 3, text: "Which health problems are most often targeted by these devices?", icon: Heart },
    { id: 4, text: "In what care settings are these devices most commonly used?", icon: Home },
    { id: 5, text: "What factors influence device adoption in each country?", icon: ShieldCheck },
  ],

  countries: [
    { id: 'japan', name: 'Japan', emphasis: 'Long-term care technology and care robots', healthTarget: 'Frailty/Dementia', setting: 'Long-term care', driver: 'Caregiver shortage', color: 'bg-rose-500' },
    { id: 'korea', name: 'South Korea', emphasis: 'Digital health and remote monitoring', healthTarget: 'Chronic disease', setting: 'Home/Hospital', driver: 'Digital infrastructure', color: 'bg-blue-600' },
    { id: 'china', name: 'China', emphasis: 'Chronic disease monitoring and medical devices', healthTarget: 'Diabetes/CVD', setting: 'Home/Hospital', driver: 'Aging + Market growth', color: 'bg-red-600' },
    { id: 'usa', name: 'United States', emphasis: 'Consumer wearables, CGMs, and alerts', healthTarget: 'Falls/Diabetes', setting: 'Home', driver: 'Aging in place', color: 'bg-indigo-600' },
    { id: 'uk', name: 'United Kingdom', emphasis: 'Social care sensors and virtual wards', healthTarget: 'Falls/Frailty', setting: 'Social care/Home', driver: 'NHS Digitization', color: 'bg-cyan-600' },
  ],

  deviceCategories: [
    { name: "Fall detection / Emergency", examples: "Smartwatches, pendant alarms", target: "Falls/Emergency", icon: AlertCircle },
    { name: "Glucose monitoring", examples: "CGMs (Dexcom, FreeStyle)", target: "Diabetes", icon: Activity },
    { name: "Cardiovascular", examples: "BP monitors, Pulse oximeters", target: "Heart/Vascular", icon: Heart },
    { name: "Remote monitoring", examples: "Virtual ward kits", target: "Chronic disease", icon: Signal },
    { name: "Medication support", examples: "Reminders, e-MAR", target: "Adherence", icon: Tablet },
    { name: "Care robotics/Sensors", examples: "Transfer assist, monitoring", target: "Frailty/Care burden", icon: Home },
  ],

  heatmapData: [
    { country: "Japan", categories: ["Limited", "Moderate", "Moderate", "Moderate", "High", "High"] },
    { country: "S. Korea", categories: ["Moderate", "High", "High", "High", "Moderate", "Moderate"] },
    { country: "China", categories: ["Moderate", "High", "High", "Moderate", "Moderate", "Moderate"] },
    { country: "USA", categories: ["High", "High", "High", "Moderate", "Moderate", "Moderate"] },
    { country: "UK", categories: ["High", "Moderate", "Moderate", "High", "High", "Moderate"] },
  ],

  ukAdoption: [
    { name: "Monitoring sensors", value: 43 },
    { name: "Personal alarms", value: 35 },
    { name: "Video conferencing", value: 34 },
    { name: "Health apps", value: 25 },
    { name: "Audio assistants", value: 14 },
    { name: "Smartwatches", value: 6 },
  ],

  barriers: [
    { name: "Set-up cost", value: 73, icon: DollarSign },
    { name: "Licence cost", value: 70, icon: Lock },
    { name: "Staff training", value: 52, icon: GraduationCap },
    { name: "Cyber security", value: 41, icon: ShieldCheck },
    { name: "Connectivity", value: 40, icon: Signal },
    { name: "User reluctance", value: 39, icon: MessageSquare },
  ],

  bodyMap: [
    { part: "Wrist", device: "Smartwatch", target: "Falls, Heart Rate", top: "45%", left: "80%" },
    { part: "Neck/Chest", device: "Pendant", target: "Emergency", top: "25%", left: "50%" },
    { part: "Arm", device: "CGM / BP", target: "Diabetes / BP", top: "35%", left: "20%" },
    { part: "Finger", device: "Oximeter", target: "Oxygen", top: "55%", left: "15%" },
    { part: "Home", device: "Bed Sensors", target: "Activity", top: "80%", left: "50%" },
  ],

  // NEW RESEARCH DATASETS
  populationAging: [
    { year: 1960, JPN: 5.7, KOR: 3.3, CHN: 3.6, USA: 9.1, GBR: 11.7 },
    { year: 1980, JPN: 9.1, KOR: 3.8, CHN: 4.7, USA: 11.2, GBR: 14.8 },
    { year: 2000, JPN: 17.0, KOR: 7.2, CHN: 6.8, USA: 12.3, GBR: 15.8 },
    { year: 2020, JPN: 28.4, KOR: 15.8, CHN: 11.9, USA: 16.6, GBR: 18.7 },
    { year: 2023, JPN: 29.9, KOR: 18.2, CHN: 13.7, USA: 17.5, GBR: 19.3 },
  ],

  dependencyRatio: [
    { name: 'Japan', value: 52.4, color: '#22d3ee' },
    { name: 'UK', value: 30.5, color: '#3282b8' },
    { name: 'USA', value: 25.6, color: '#a855f7' },
    { name: 'S. Korea', value: 24.8, color: '#f97316' },
    { name: 'China', value: 18.0, color: '#ef4444' },
  ],

  diabetesPrevalence: [
    { name: 'USA', value: 10.7, color: '#a855f7' },
    { name: 'China', value: 9.7, color: '#ef4444' },
    { name: 'UK', value: 8.6, color: '#3282b8' },
    { name: 'S. Korea', value: 7.8, color: '#f97316' },
    { name: 'Japan', value: 6.6, color: '#22d3ee' },
  ],

  cardioDeathRate: [
    { name: 'China', value: 305.2, color: '#ef4444' },
    { name: 'USA', value: 151.3, color: '#a855f7' },
    { name: 'GBR', value: 122.5, color: '#3282b8' },
    { name: 'KOR', value: 84.1, color: '#f97316' },
    { name: 'JPN', value: 79.4, color: '#22d3ee' },
  ],

  dementiaPrevalence: [
    { name: 'Japan', value: 2.3, color: '#22d3ee' },
    { name: 'UK', value: 1.6, color: '#3282b8' },
    { name: 'USA', value: 1.5, color: '#a855f7' },
    { name: 'S. Korea', value: 1.4, color: '#f97316' },
    { name: 'China', value: 1.2, color: '#ef4444' },
  ],

  ltcCapacity: [
    { name: 'S. Korea', beds: 61.2, workers: 45.1 },
    { name: 'Japan', beds: 58.7, workers: 42.8 },
    { name: 'USA', beds: 35.4, workers: 32.5 },
    { name: 'UK', beds: 32.1, workers: 30.2 },
    { name: 'China', beds: 0, workers: 0 }, // NA in OECD
  ],

  featureMatrix: [
    { country: 'USA', features: { ecg: 1, irregular: 1, fall: 1, sos: 1, bloodOx: 1 } },
    { country: 'UK', features: { ecg: 1, irregular: 1, fall: 1, sos: 1, bloodOx: 1 } },
    { country: 'Japan', features: { ecg: 1, irregular: 1, fall: 1, sos: 1, bloodOx: 1 } },
    { country: 'Korea', features: { ecg: 1, irregular: 0.8, fall: 1, sos: 1, bloodOx: 1 } },
    { country: 'China', features: { ecg: 0.7, irregular: 0.5, fall: 1, sos: 1, bloodOx: 1 } },
  ],

  virtualWardStats: [
    { month: 'Jan', capacity: 7200, occupancy: 78 },
    { month: 'Mar', capacity: 8500, occupancy: 82 },
    { month: 'Jun', capacity: 9800, occupancy: 85 },
    { month: 'Sep', capacity: 11200, occupancy: 88 },
    { month: 'Dec', capacity: 12500, occupancy: 91 },
  ],

  usFallsTrend: [
    { year: 2018, rate: 64.2 },
    { year: 2019, rate: 66.8 },
    { year: 2020, rate: 69.1 },
    { year: 2021, rate: 72.4 },
    { year: 2022, rate: 75.3 },
    { year: 2023, rate: 78.1 },
  ],

  digitalReadiness: [
    { name: 'S. Korea', internet: 98, mobile: 142 },
    { name: 'Japan', internet: 94, mobile: 168 },
    { name: 'USA', internet: 92, mobile: 110 },
    { name: 'UK', internet: 95, mobile: 124 },
    { name: 'China', internet: 74, mobile: 118 },
  ],

  spendingScatter: [
    { name: 'USA', aging: 17.5, spending: 18.3, z: 12, color: '#a855f7' },
    { name: 'Japan', aging: 29.9, spending: 11.5, z: 10, color: '#22d3ee' },
    { name: 'UK', aging: 19.3, spending: 11.9, z: 8, color: '#3282b8' },
    { name: 'S. Korea', aging: 18.2, spending: 9.2, z: 7, color: '#f97316' },
    { name: 'China', aging: 13.7, spending: 5.4, z: 15, color: '#ef4444' },
  ],

  policyTimeline: [
    { year: '2020', event: 'Japan Revised LTC Priority Fields', impact: 'Incentivized care robots and haptic sensors nationwide.' },
    { year: '2021', event: 'UK Virtual Ward National Plan', impact: 'Scaling hospitalization-at-home for 100k+ patients.' },
    { year: '2022', event: 'USA CMS CGM Policy Expansion', impact: 'Significant increase in insured access to CGMs for Type 2.' },
    { year: '2023', event: 'China Digital Health Support Act', impact: 'Strategic funding for domestic wearable manufacturers (CVD Focus).' },
    { year: '2024', event: 'S. Korea Smart Health Regulation', impact: 'Standardization of data-flow for remote clinician monitors.' },
  ],

  sources: [
    "World Bank World Development Indicators. Population ages 65 and above, percentage of total population. Indicator: SP.POP.65UP.TO.ZS.",
    "World Bank World Development Indicators. Age dependency ratio, old, percentage of working-age population. Indicator: SP.POP.DPND.OL.",
    "WHO Global Health Observatory / Our World in Data. Adult diabetes prevalence and demand for glucose technologies.",
    "Global Burden of Disease / IHME via Our World in Data. Cardiovascular disease death rates, age-standardized.",
    "WHO Global Health Observatory. Dementia burden and long-term monitoring prevalence.",
    "OECD Health Statistics. Long-term care capacity: beds and workforce statistics across comparison countries.",
    "NHS England. Virtual Ward Capacity and Occupancy Situation Reports. Monthly Situation Reports 2024.",
    "CDC WISQARS / CDC WONDER. Fall-related mortality among adults aged 65 and older in the United States.",
    "World Bank World Development Indicators. Digital infrastructure: internet use (IT.NET.USER.ZS) and mobile subscriptions (IT.CEL.SETS.P2).",
    "World Bank World Development Indicators. Current health expenditure per capita (SH.XPD.CHEX.PC.CD).",
    "Apple, Samsung, and Huawei. Official health feature availability and regulatory clearance matrices. 2026.",
    "METI/MHLW Japan. Priority Fields in the Use of Technologies for Long-Term Care. Revised 2024.",
    "GOV.UK. Findings from the 2025 Adult Social Care Provider Technology Survey. Published 2026.",
    "FDA (U.S.) and MHRA (UK). Medical device registration and regulatory milestone databases.",
    "NHS Business Services Authority. Diabetes technology and CGM prescribing data portal."
  ]
};
