import { Box, Card, Text, Title } from "@mantine/core";
import { DashboardRepository } from "@/components/dashboardRepository";
import Help from "@/components/ui/Help";
import { PackageHelp } from "@/components/helps/PackagesHelp";

export default function CompareRepo() {
  return (
    <main>
      <Title order={2}>Compare Github repositories star history</Title>
      <Text mt="xs">
        View, compare the github repository star History and forecast.
      </Text>
      <Card shadow="sm" padding="md" radius="md" mt="md">
        <Box ta="right">
          <Help content={<PackageHelp />} />
        </Box>
        <DashboardRepository />
      </Card>
    </main>
  );
}
