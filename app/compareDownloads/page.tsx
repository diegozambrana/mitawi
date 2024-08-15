import { DashboardPackages } from "@/components/dashboardDownloads";
import { PackageHelp } from "@/components/helps/PackagesHelp";
import Help from "@/components/ui/Help";
import { Box, Card, Text, Title } from "@mantine/core";

export default function CompareDownloads() {
  return (
    <main>
      <Title order={2}>Compare python packages download history</Title>
      <Text mt="xs">
        View, compare the python packages download history and forecast.
      </Text>
      <Card shadow="sm" padding="md" radius="md" mt="md">
        <Box ta="right">
          <Help content={<PackageHelp />} />
        </Box>
        <DashboardPackages />
      </Card>
    </main>
  );
}
