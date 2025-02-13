import { Spinner } from "./Spinner";
import { ErrorMsg } from "./ErrorMsg";
import { useTitle } from "../hooks/useTitle";

export const PageWrapper = ({
    isLoading = false,
    pagetitle = "",
    errorMsg = "Request Failed",
    children,
}) => {
    // update document Title
    const documentTitle = useTitle(pagetitle);

    if (isLoading) return <Spinner />;
    if (errorMsg) return <ErrorMsg msg={errorMsg} />;

    return <>{children}</>;
};
