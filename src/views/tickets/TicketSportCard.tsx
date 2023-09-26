import React, {useState} from 'react';
import {CalendarMonth, Delete, Edit, QuestionMark, SportsSoccer, TaskAlt} from "@mui/icons-material";
import Place from '@mui/icons-material/Place';
import Button from "../../components/ui/Button";
import IconButton from "../../components/ui/IconButton";
import moment, {Moment} from "moment";
import classNames from "classnames";
import DeleteConfirmationModal from "../../components/modals/DeleteConfirmationModal";
import {Dialog, DialogBody, DialogFooter, DialogHeader} from "@material-tailwind/react";
import DeleteIcon from "@mui/icons-material/Delete";
import CancelIcon from "@mui/icons-material/Cancel";
import {toast} from "react-toastify";
import {TicketService} from "../../services/Ticket";
import {SportTicketPost, SportTicketResponse, TicketCategoriesGet, TicketGet} from "../../models/TicketModel";
import DetailsSportTicket from "./details/DetailsSportTicket";
import {UserPublish} from "../../models/UserModel";
import {useForm} from "react-hook-form";
import UpdateSportTicket from "./update/UpdateSportTicket";

export type TicketSportProps = {
    id: string,
    type: "sport" | "spectacle",
    label: string,
    category?: string,
    price?: string,
    date?: Moment,
    className?: string,
    seller?: string,
    purchaser?: UserPublish,
    city?: string,
    edit?: boolean,
    del?: boolean,
}

const TicketSportCard = ({id, label, price, date, type, category, seller, purchaser, className, city, edit, del }: TicketSportProps) => {
    const ticketService = new TicketService();
    const form = useForm<SportTicketPost>();

    const [openDetails, setOpenDetails] = React.useState(false);
    const [openEdit, setOpenEdit] = React.useState(false);
    const [openDelete, setOpenDeleteDelete] = React.useState(false);

    const [ticketData, setTicketData] = useState<SportTicketResponse>();


    const handleOpenEdit = () => {
        setOpenEdit(!openEdit)
        ticketService
            .getOneSportTicket(id)
            ?.then((res) => {
                // setTicketData(res.data)
                form.setValue('name', res.data?.name);
                form.setValue('price', res.data?.price);
                form.setValue('startDate', res.data?.startDate);
                form.setValue('endDate', res.data?.endDate);
                form.setValue('addressName', res.data?.address.name);
                form.setValue('description', res.data?.description);
                form.setValue('addressZipcode', res.data?.address.zipcode);
                form.setValue('sportCategoryId', res.data?.category.id);

                console.log("categ id = " + res.data?.category.id)
            })
            .catch((e) => console.log(e));
    };

    const handleOpenDetails = () => {
        setOpenDetails(!openDetails)
        ticketService
            .getOneSportTicket(id)
            ?.then((res) => setTicketData(res.data))
            .catch((e) => console.log(e));
    };
    const handleOpenDelete = () => setOpenDeleteDelete(!openDelete);
    const handleDelete = (id: number) => {
        setOpenDeleteDelete(false);
        ticketService
            .deleteSportTicket(id)
            ?.then((res) => {
                toast.success(res.data.message);
            })
            .catch((e) => toast.error(e.response.data.message));
    };

    return (
        <>
            <div className="w-[285px] bg-green-primary-50 flex flex-col rounded-lg shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
                <div className={"relative flex-1 flex-col bg-green-primary-200 rounded-t-lg flex justify-center items-center p-10"}>
                    {
                        category?
                            <QuestionMark fontSize={"large"} className={"text-green-primary-700"} />
                            :
                            <SportsSoccer fontSize={"large"} className={"text-green-primary-700"} />
                    }
                    {
                        category?
                            <div className={"absolute -bottom-4 bg-green-primary-500 py-1 px-2 rounded-3xl text-green-primary-50 font-semibold"}>
                                {category}
                            </div>
                            :
                            <></>
                    }

                    {
                        purchaser?
                            <div className={"absolute px-3 top-2 right-2 flex flex-row items-center gap-1 bg-green-primary-500 py-1 rounded-3xl text-green-primary-50 font-semibold text-sm"}>
                                <TaskAlt/>
                                <div>Sold</div>
                            </div>
                            :
                            <></>
                    }

                </div>
                <div className={classNames("flex justify-center p-3 flex-col gap-2",
                        category?"mt-4":""
                    )}
                >
                    <div className={"gap-6 text-sm font-semibold text-green-primary-600 flex flex-row justify-between"}>
                    {
                        date?
                            <div className={"gap-1 flex flex-row items-center flex-wrap"}>
                                <CalendarMonth fontSize={"inherit"} />
                                {"" + date.locale(window.navigator.language).format('L')}
                            </div>
                            :
                            <></>
                    }
                        <div className={"text-green-primary-500"}>{seller?"by " + seller:""}</div>
                    </div>
                    <div className={"text-xl font-bold text-green-primary-700"}>
                        {label}
                    </div>
                    {
                        city?
                            <div className={"text-sm font-semibold text-green-primary-600 flex flex-col"}>
                                <div className={"gap-1 flex flex-row items-center flex-wrap"}>
                                    <Place fontSize={"inherit"} />{city}
                                </div>
                            </div>
                            :
                            <></>
                    }
                    {
                        price?
                            <div className={"text-xl gap-6 font-bold text-green-primary-700 flex flex-row justify-between"}>
                                <div>{price?price+" €":""}</div>
                            </div>
                            :
                            <></>
                    }
                    <div className={"flex flex-row gap-2"}>
                        <Button
                            // to={"/ticket/"+ type +"/"+id}
                            label={"Details"}
                            className={"rounded-lg flex-1 bg-blue-200 font-bold text-blue-700 hover:bg-blue-300"}
                            onClick={handleOpenDetails}
                        />
                        <Dialog open={openDetails} handler={handleOpenDetails} className={"rounded-xl"}>
                            <DetailsSportTicket ticketData={ticketData} />
                        </Dialog>


                        {edit?
                            <>
                                <Button
                                    prefixIcon={<Edit />}
                                    className='bg-amber-200 hover:bg-amber-300 text-xl font-semibold text-amber-900'
                                    type={"icon"}
                                    onClick={handleOpenEdit}
                                />
                                <Dialog open={openEdit} handler={handleOpenEdit} className={"rounded-xl"}>
                                    <UpdateSportTicket form={form} id={id} />
                                </Dialog>
                            </>
                            :<></>
                        }


                        {del?
                        <>
                            <Button
                                prefixIcon={<Delete />}
                                className='bg-red-400 text-xl font-semibold hover:bg-red-300 text-red-800'
                                type={"icon"}
                                onClick={handleOpenDelete}
                            />
                            <Dialog open={openDelete} handler={handleOpenDelete} className={""}>
                                <DialogHeader className={"bg-green-primary-50 rounded-t-3xl"}>Are you sure you want to delete this ticket ?</DialogHeader>
                                <DialogBody divider className={"bg-green-primary-50"}>
                                    This ticket will be deleted immediately. You can't undo this action.
                                </DialogBody>
                                <DialogFooter className={"bg-green-primary-50 flex gap-3 rounded-b-3xl"}>
                                    <Button
                                        className='bg-red-400 text-xl font-semibold hover:bg-red-300 text-red-800'
                                        prefixIcon={<DeleteIcon />}
                                        label='Delete'
                                        onClick={()=>handleDelete(Number(id))}
                                    />
                                    <Button
                                        className='bg-blue-400 text-xl font-semibold hover:bg-blue-300 text-blue-800'
                                        prefixIcon={<CancelIcon />}
                                        label='Cancel'
                                        onClick={() => setOpenDeleteDelete(false)}
                                    />
                                </DialogFooter>
                            </Dialog>
                        </>

                            :<></>}
                    </div>
                </div>
            </div>
        </>
    );
}

export default TicketSportCard;
