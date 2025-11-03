export interface ChartInfo {
  id: number;
  name: string;
  description: string;
  category: string;
  priority: string;
  url: string;
  symbol?: string;
}

export interface ChartCategory {
  id: string;
  title: string;
  emoji: string;
  count: number;
  charts: ChartInfo[];
}

export const CHART_CATEGORIES: ChartCategory[] = [
  {
    id: "macro",
    title: "MACRO",
    emoji: "1️⃣",
    count: 4,
    charts: [
      {
        id: 1,
        name: "SPX_Secular_Trend",
        description: "S&P 500 Secular Trend (Monthly)",
        category: "Market Trend",
        priority: "critical",
        url: "https://schrts.co/ibFUedcP",
        symbol: "$SPX"
      },
      {
        id: 3,
        name: "US_Dollar_Index",
        description: "US Dollar Index (DXY)",
        category: "Macro",
        priority: "critical",
        url: "https://schrts.co/UVipTWeD",
        symbol: "$USD"
      },
      {
        id: 4,
        name: "Treasury_10Y_Yields",
        description: "10-Year Treasury Yields",
        category: "Macro",
        priority: "critical",
        url: "https://schrts.co/JwzwrkNe",
        symbol: "$TNX"
      },
      {
        id: 2,
        name: "Copper_Gold_Ratio",
        description: "Copper/Gold Ratio (Economic Health)",
        category: "Macro",
        priority: "high",
        url: "https://schrts.co/qNPubctQ",
        symbol: "$COPPER:$GOLD"
      }
    ]
  },
  {
    id: "leadership",
    title: "LEADERSHIP",
    emoji: "2️⃣",
    count: 4,
    charts: [
      {
        id: 8,
        name: "XLY_XLP_Ratio",
        description: "Consumer Discretionary vs Staples (XLY:XLP)",
        category: "Risk Appetite",
        priority: "critical",
        url: "https://schrts.co/vKKGFDPr",
        symbol: "XLY:XLP"
      },
      {
        id: 11,
        name: "XLK_XLP_Ratio",
        description: "Technology vs Staples (XLK:XLP)",
        category: "Sector",
        priority: "high",
        url: "https://schrts.co/jFJwQSyx",
        symbol: "XLK:XLP"
      },
      {
        id: 12,
        name: "SMH_SPY_Ratio",
        description: "Semiconductors vs S&P 500 (SMH:SPY)",
        category: "Sector",
        priority: "high",
        url: "https://schrts.co/NFhmcdEy",
        symbol: "SMH:SPY"
      },
      {
        id: 9,
        name: "IWF_IWD_Ratio",
        description: "Growth vs Value (IWF:IWD)",
        category: "Risk Appetite",
        priority: "high",
        url: "https://schrts.co/NGenHtpa",
        symbol: "IWF:IWD"
      }
    ]
  },
  {
    id: "breadth",
    title: "BREADTH",
    emoji: "3️⃣",
    count: 4,
    charts: [
      {
        id: 10,
        name: "RSP_SPY_Ratio",
        description: "Equal Weight vs Market Cap (RSP:SPY)",
        category: "Breadth",
        priority: "high",
        url: "https://schrts.co/wZfRYNgR",
        symbol: "RSP:SPY"
      },
      {
        id: 13,
        name: "SPXA50R",
        description: "S&P 500 % Above 50-day MA",
        category: "Breadth",
        priority: "critical",
        url: "https://schrts.co/NwmJfADb",
        symbol: "$SPXA50R"
      },
      {
        id: 14,
        name: "SPXA150R",
        description: "S&P 500 % Above 150-day MA",
        category: "Breadth",
        priority: "high",
        url: "https://schrts.co/TihhqDrR",
        symbol: "$SPXA150R"
      },
      {
        id: 15,
        name: "SPXA200R",
        description: "S&P 500 % Above 200-day MA",
        category: "Breadth",
        priority: "critical",
        url: "https://schrts.co/fqSwKPIQ",
        symbol: "$SPXA200R"
      }
    ]
  },
  {
    id: "credit",
    title: "CREDIT",
    emoji: "4️⃣",
    count: 3,
    charts: [
      {
        id: 5,
        name: "HYG_IEF_Ratio",
        description: "High Yield vs Treasury (HYG:IEF)",
        category: "Risk Appetite",
        priority: "high",
        url: "https://schrts.co/hRQFjuGD",
        symbol: "HYG:IEF"
      },
      {
        id: 6,
        name: "JNK_IEF_Ratio",
        description: "Junk Bond vs Treasury (JNK:IEF)",
        category: "Risk Appetite",
        priority: "high",
        url: "https://schrts.co/vzUPsuJK",
        symbol: "JNK:IEF"
      },
      {
        id: 7,
        name: "LQD_IEF_Ratio",
        description: "Investment Grade vs Treasury (LQD:IEF)",
        category: "Risk Appetite",
        priority: "medium",
        url: "https://schrts.co/GGDNXfXy",
        symbol: "LQD:IEF"
      }
    ]
  },
  {
    id: "volatility",
    title: "VOLATILITY",
    emoji: "5️⃣",
    count: 2,
    charts: [
      {
        id: 17,
        name: "VIX_VXV_Ratio",
        description: "VIX Term Structure (VIX:VXV)",
        category: "Sentiment",
        priority: "high",
        url: "https://schrts.co/feTvgpFy",
        symbol: "$VIX:$VXV"
      },
      {
        id: 18,
        name: "VVIX",
        description: "Volatility of VIX (VVIX)",
        category: "Sentiment",
        priority: "medium",
        url: "https://schrts.co/HuFZgpqw",
        symbol: "$VVIX"
      }
    ]
  },
  {
    id: "sentiment",
    title: "SENTIMENT",
    emoji: "6️⃣",
    count: 1,
    charts: [
      {
        id: 16,
        name: "CPCE_Put_Call",
        description: "Put/Call Ratio with 253-day SMA",
        category: "Sentiment",
        priority: "high",
        url: "https://schrts.co/XdYdgKQG",
        symbol: "$CPCE"
      }
    ]
  }
];

export const getAllCharts = (): ChartInfo[] => {
  return CHART_CATEGORIES.flatMap(cat => cat.charts);
};

export const getChartById = (id: number): ChartInfo | undefined => {
  return getAllCharts().find(chart => chart.id === id);
};

export const getChartsByCategory = (categoryId: string): ChartInfo[] => {
  const category = CHART_CATEGORIES.find(cat => cat.id === categoryId);
  return category?.charts || [];
};

