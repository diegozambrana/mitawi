import { DashboardOrganization } from "@/components/dashboardOrganization";
import { OrganizationHelp } from "@/components/helps/OrganizationHelp";
import Help from "@/components/ui/Help";
import { Box, Card, Text, Title } from "@mantine/core";

export default function CompareOrg() {
  return (
    <main>
      <Title order={2}>Compare Github organization star history</Title>
      <Text mt="xs">
        View, compare the github organization star History and forecast.
      </Text>
      <Card shadow="sm" padding="md" radius="md" mt="md">
        <Box ta="right">
          <Help content={<OrganizationHelp />} />
        </Box>
        <DashboardOrganization />
      </Card>
    </main>
  );
}
