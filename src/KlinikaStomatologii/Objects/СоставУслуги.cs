﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.KlinikaStomatologii
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Состав услуги.
    /// </summary>
    // *** Start programmer edit section *** (СоставУслуги CustomAttributes)

    // *** End programmer edit section *** (СоставУслуги CustomAttributes)
    [AutoAltered()]
    [Caption("Состав услуги")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СоставУслугиE", new string[] {
            "Количество as \'Количество\'",
            "Единицы as \'Единицы\'",
            "Материал as \'Материал\'",
            "Материал.Наименование as \'Наименование\'"}, Hidden=new string[] {
            "Материал.Наименование"})]
    [MasterViewDefineAttribute("СоставУслугиE", "Материал", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    public class СоставУслуги : ICSSoft.STORMNET.DataObject
    {
        
        private int fКоличество;
        
        private IIS.KlinikaStomatologii.Единицы fЕдиницы;
        
        private IIS.KlinikaStomatologii.Материал fМатериал;
        
        private IIS.KlinikaStomatologii.Услуга fУслуга;
        
        // *** Start programmer edit section *** (СоставУслуги CustomMembers)

        // *** End programmer edit section *** (СоставУслуги CustomMembers)

        
        /// <summary>
        /// Единицы.
        /// </summary>
        // *** Start programmer edit section *** (СоставУслуги.Единицы CustomAttributes)

        // *** End programmer edit section *** (СоставУслуги.Единицы CustomAttributes)
        public virtual IIS.KlinikaStomatologii.Единицы Единицы
        {
            get
            {
                // *** Start programmer edit section *** (СоставУслуги.Единицы Get start)

                // *** End programmer edit section *** (СоставУслуги.Единицы Get start)
                IIS.KlinikaStomatologii.Единицы result = this.fЕдиницы;
                // *** Start programmer edit section *** (СоставУслуги.Единицы Get end)

                // *** End programmer edit section *** (СоставУслуги.Единицы Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СоставУслуги.Единицы Set start)

                // *** End programmer edit section *** (СоставУслуги.Единицы Set start)
                this.fЕдиницы = value;
                // *** Start programmer edit section *** (СоставУслуги.Единицы Set end)

                // *** End programmer edit section *** (СоставУслуги.Единицы Set end)
            }
        }
        
        /// <summary>
        /// Количество.
        /// </summary>
        // *** Start programmer edit section *** (СоставУслуги.Количество CustomAttributes)

        // *** End programmer edit section *** (СоставУслуги.Количество CustomAttributes)
        public virtual int Количество
        {
            get
            {
                // *** Start programmer edit section *** (СоставУслуги.Количество Get start)

                // *** End programmer edit section *** (СоставУслуги.Количество Get start)
                int result = this.fКоличество;
                // *** Start programmer edit section *** (СоставУслуги.Количество Get end)

                // *** End programmer edit section *** (СоставУслуги.Количество Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СоставУслуги.Количество Set start)

                // *** End programmer edit section *** (СоставУслуги.Количество Set start)
                this.fКоличество = value;
                // *** Start programmer edit section *** (СоставУслуги.Количество Set end)

                // *** End programmer edit section *** (СоставУслуги.Количество Set end)
            }
        }
        
        /// <summary>
        /// Состав услуги.
        /// </summary>
        // *** Start programmer edit section *** (СоставУслуги.Материал CustomAttributes)

        // *** End programmer edit section *** (СоставУслуги.Материал CustomAttributes)
        [PropertyStorage(new string[] {
                "Материал"})]
        [NotNull()]
        public virtual IIS.KlinikaStomatologii.Материал Материал
        {
            get
            {
                // *** Start programmer edit section *** (СоставУслуги.Материал Get start)

                // *** End programmer edit section *** (СоставУслуги.Материал Get start)
                IIS.KlinikaStomatologii.Материал result = this.fМатериал;
                // *** Start programmer edit section *** (СоставУслуги.Материал Get end)

                // *** End programmer edit section *** (СоставУслуги.Материал Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СоставУслуги.Материал Set start)

                // *** End programmer edit section *** (СоставУслуги.Материал Set start)
                this.fМатериал = value;
                // *** Start programmer edit section *** (СоставУслуги.Материал Set end)

                // *** End programmer edit section *** (СоставУслуги.Материал Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.KlinikaStomatologii.Услуга.
        /// </summary>
        // *** Start programmer edit section *** (СоставУслуги.Услуга CustomAttributes)

        // *** End programmer edit section *** (СоставУслуги.Услуга CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Услуга"})]
        public virtual IIS.KlinikaStomatologii.Услуга Услуга
        {
            get
            {
                // *** Start programmer edit section *** (СоставУслуги.Услуга Get start)

                // *** End programmer edit section *** (СоставУслуги.Услуга Get start)
                IIS.KlinikaStomatologii.Услуга result = this.fУслуга;
                // *** Start programmer edit section *** (СоставУслуги.Услуга Get end)

                // *** End programmer edit section *** (СоставУслуги.Услуга Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СоставУслуги.Услуга Set start)

                // *** End programmer edit section *** (СоставУслуги.Услуга Set start)
                this.fУслуга = value;
                // *** Start programmer edit section *** (СоставУслуги.Услуга Set end)

                // *** End programmer edit section *** (СоставУслуги.Услуга Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СоставУслугиE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СоставУслугиE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СоставУслугиE", typeof(IIS.KlinikaStomatologii.СоставУслуги));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of СоставУслуги.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfСоставУслуги CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfСоставУслуги CustomAttributes)
    public class DetailArrayOfСоставУслуги : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.KlinikaStomatologii.DetailArrayOfСоставУслуги members)

        // *** End programmer edit section *** (IIS.KlinikaStomatologii.DetailArrayOfСоставУслуги members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type СоставУслуги by index.
        /// </summary>
        /// <summary>
        /// Adds object with type СоставУслуги.
        /// </summary>
        public DetailArrayOfСоставУслуги(IIS.KlinikaStomatologii.Услуга fУслуга) : 
                base(typeof(СоставУслуги), ((ICSSoft.STORMNET.DataObject)(fУслуга)))
        {
        }
        
        public IIS.KlinikaStomatologii.СоставУслуги this[int index]
        {
            get
            {
                return ((IIS.KlinikaStomatologii.СоставУслуги)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.KlinikaStomatologii.СоставУслуги dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
