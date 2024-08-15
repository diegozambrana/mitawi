import { YFDashboardContainer } from "@/components/YFDashboard";
import { Text, Title } from "@mantine/core";

export default function YahooFinanceHistory() {
  return (
    <div>
      <Title order={2}>Yahoo Finance</Title>
      <Text mb="md" mt="sm">
        This section get data from Yahoo finance API and display a forecast
        produced by neuralforecast
      </Text>
      <YFDashboardContainer />
    </div>
  );
}
