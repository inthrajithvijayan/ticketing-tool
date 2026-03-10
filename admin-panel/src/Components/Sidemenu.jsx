import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarHeader,
    SidebarTrigger
} from "@/components/ui/sidebar"

export function Sidemenu() {
    return (
        <Sidebar>
            <SidebarHeader>
                <div className="flex justify-between">
                    <div>
                        Admin Panel
                    </div>
                    <SidebarTrigger />
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarMenu className="mt-[25px]">
                    <SidebarMenuItem className='flex flex-col gap-2'>
                        <SidebarMenuButton asChild>
                            <a href="/dashboard">Dashboard</a>
                        </SidebarMenuButton>
                        <SidebarMenuButton asChild>
                            <a href="/products">Products</a>
                        </SidebarMenuButton>
                        <SidebarMenuButton asChild>
                            <a href="/users">Users</a>
                        </SidebarMenuButton>
                        <SidebarMenuButton asChild>
                            <a href="/settings">Settings</a>
                        </SidebarMenuButton>
                    </SidebarMenuItem >
                </SidebarMenu>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}