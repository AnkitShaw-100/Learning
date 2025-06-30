import React from 'react'

interface ServiceDetailsPageProps {
    params: { id: string };
}

const ServiceDetailsPage = async ({ params }: ServiceDetailsPageProps)  => {
    const id = params.id;
    return (
        <div>
            We offer lot of servicesss letss have a look {id}
        </div>
    )
}

export default ServiceDetailsPage
