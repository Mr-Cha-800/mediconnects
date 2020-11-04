<template>
    <div>
        <div class="q-pl-md q-pt-md">
            <h4 class="ccl-left-panel-head-ttl">
                {{ activeTab.charAt(0).toUpperCase() + activeTab.slice(1) }}
            </h4>
        </div>
    </div>
</template>

<script>
export default {
    name:"SidebarHeader",
    props:['activeTab'],
}
</script>

<style>

.headerContainer{
    width:100%;
}
</style>
