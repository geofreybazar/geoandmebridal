import { Dispatch, SetStateAction } from "react";

const tabs = [
  { key: "active_orders", label: "Active Orders" },
  { key: "completed", label: "Completed Orders" },
  { key: "cancelled", label: "Cancelled Orders" },
];

interface TabsProps {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

const Tabs = ({ activeTab, setActiveTab }: TabsProps) => {
  return (
    <div className='flex gap-6 border-b border-porcelainBeige pb-2'>
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => setActiveTab(tab.key)}
          className={`text-sm pb-2 transition ${
            activeTab === tab.key
              ? "text-warmTaupe border-b-2 border-warmTaupe"
              : "text-muted-foreground"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
