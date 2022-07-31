import React, { ReactElement } from "react";
import { AdminLayout } from "../../layouts";
import { NextPageWithLayout } from "../../models/layout";

type Props = {};

const Dashboard: NextPageWithLayout = (props: Props) => {
  return <div>Dashboard</div>;
};

Dashboard.getLayout = (page: ReactElement) => <AdminLayout>{page}</AdminLayout>;

export default Dashboard;
